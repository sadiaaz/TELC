
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,         // Enable autoplay
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
})


let valueDisplays = document.querySelectorAll(".num");
let interval = 6000;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);

});




let a = [0, 0, 0, 0];

function toggleSection(index) {
    let all = document.querySelectorAll('.d26');
    let icon = document.querySelector(`#icn${index}`);
    let section = all[index];

    all.forEach((sec, i) => {
        if (i !== index) {
            sec.classList.remove('open');
            let otherIcon = document.querySelector(`#icn${i}`);
            otherIcon.classList.remove('bi-dash');
            otherIcon.classList.add('bi-plus');
            a[i] = 0;
        }
    });

    if (a[index] === 0) {
        icon.classList.remove('bi-plus');
        icon.classList.add('bi-dash');
        section.classList.add('open');  // Add 'open' class to show section
        a[index] = 1;
    } else {
        icon.classList.remove('bi-dash');
        icon.classList.add('bi-plus');
        section.classList.remove('open');  // Remove 'open' class to hide section
        a[index] = 0;
    }
}
