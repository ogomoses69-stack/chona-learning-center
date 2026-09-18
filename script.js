const menu=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));

const tabs=document.querySelectorAll('.tab'), panels=document.querySelectorAll('.subjects-panel');
tabs.forEach(tab=>tab.addEventListener('click',()=>{
  tabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');
  panels.forEach(p=>p.classList.toggle('hidden',p.id!==tab.dataset.target));
}));

const lightbox=document.querySelector('.lightbox'), lbImg=lightbox.querySelector('img'), lbText=lightbox.querySelector('p');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{
  lbImg.src=item.dataset.image;lbImg.alt=item.dataset.caption||'School photograph';lbText.textContent=item.dataset.caption||'';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');
}));
lightbox.querySelector('button').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')}

function sendMessage(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const msg=`Hello Chona And Learning Center,\n\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')||'Not provided'}\n\nMessage:\n${f.get('message')}`;
  window.open('https://wa.me/2347067628608?text='+encodeURIComponent(msg),'_blank','noopener');
  return false;
}

const sections=[...document.querySelectorAll('main section[id]')];
const navs=[...document.querySelectorAll('.nav-links a')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){navs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}
}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));
