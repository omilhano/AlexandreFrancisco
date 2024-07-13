// functionality to button
document.getElementById("bi-github").onclick = function (){
    location.href = "https://github.com/omilhano";
}

// functionality to button
document.getElementById("bi-linkedin").onclick = function(){
    location.href = "https://www.linkedin.com/in/alexandremvfrancisco/"
}

// ability to see in which section of the html document user is in
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    //add active to nav-link class
    function setActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 53 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});
