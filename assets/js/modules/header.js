const header = document.querySelector('[data-header]')
const openNavSubmenu = document.querySelector('[dat-open-navsubmenu]');
const navSubmenu = document.querySelector('[dat-navsubmenu]');
const openusermenu = document.querySelector('[data-open-usermenu]');
const usermenu = document.querySelector('[data-usermenu]');


function onWindowScroll() {
  if(window.scrollY > 20) {
    header.style.backgroundColor = '#0c0d14'
  } else {
    header.style.backgroundColor = 'transparent'
  }
}

function onTouchOpenNavSubMenu(event){
  event.preventDefault();
  navSubmenu.classList.toggle('active');
};

function onTouchOpenUserMenu(event){
  event.preventDefault();
  usermenu.classList.toggle('active');
};

function setListeners() {
  window.addEventListener('scroll', onWindowScroll);
  openNavSubmenu.addEventListener('touchstart', onTouchOpenNavSubMenu);
  usermenu.addEventListener('touchstart', onTouchOpenUserMenu);

};

function init(){
  setListeners()
}

export default {
  init
}