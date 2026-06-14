const linki = document.querySelectorAll(".tabs a");
const sekcje = document.querySelectorAll(".section-item");

const menu = document.querySelector(".tabs");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

if (right && left && menu) {
  right.addEventListener("click", function (e) {
    e.preventDefault();
    menu.scrollLeft += 200;
  });

  left.addEventListener("click", function (e) {
    e.preventDefault();
    menu.scrollLeft -= 200;
  });
}

linki.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    sekcje.forEach(function (sekcja) {
      sekcja.classList.remove("active");
    });

    const id = this.getAttribute("href").substring(1);
    document.getElementById(id).classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
