const moreBTN = document.querySelector(".info .metadata .moreBTN");
const title = document.querySelector(".info .metadata .title");

moreBTN.addEventListener("click", () => {
  moreBTN.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
