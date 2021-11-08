let menu = document.getElementById("click");
let aside = document.querySelector("aside");

menu.onclick = function () {
  let close = document.getElementById("close");
  aside.classList.toggle("active");
  close.addEventListener("click", () => {
    aside.classList.remove("active");
  });
};
