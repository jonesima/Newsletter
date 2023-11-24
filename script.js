const navLinksEls = document.querySelectorAll('.nav_links');
const sectionEls = document.querySelectorAll('.icon');

let currentSection = 'technology'
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 3)) {
            currentSection = sectionEl.id;
        }
    })

    navLinksEls.forEach(navLinkEl => {
        if(navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    })
})