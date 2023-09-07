function sidebarToggle() {
  const nav = document.querySelector(".navbar-collapse");
  const iconUse = document.querySelector("#icon-use");
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    iconUse.setAttribute("href", "/assets/images/icon.svg#menu");
  } else {
    nav.classList.add("open");
    iconUse.setAttribute("href", "/assets/images/icon.svg#close");
  }
}
