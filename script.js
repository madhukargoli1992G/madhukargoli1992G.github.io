const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const currentYear = document.getElementById("currentYear");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
