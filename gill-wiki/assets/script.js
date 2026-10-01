const input=document.querySelector('#wiki-search');
if(input){input.addEventListener('input',()=>{const q=input.value.toLowerCase().trim();document.querySelectorAll('.side a').forEach(a=>{a.style.display=!q||a.textContent.toLowerCase().includes(q)?'block':'none'})})}
const path=location.pathname.split('/').filter(Boolean).pop()||'index.html';document.querySelectorAll('.side a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
