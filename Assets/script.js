document.addEventListener("DOMContentLoaded", function() {
    // Display the date in the header
    document.getElementById('date').innerText = new Date().toLocaleDateString();

    // Handle the navbar for mobile views
    document.getElementById('menuIcon').addEventListener('click', function() {
        const navItems = document.getElementById('navItems');
        if (navItems.style.display === 'none' || navItems.style.display === '') {
            navItems.style.display = 'flex';
        } else {
            navItems.style.display = 'none';
        }
    });

    // Carousel
    const slides = document.querySelectorAll('#carousel .slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    function nextSlide() {
        goToSlide(currentSlide+1);
    }

    function prevSlide() {
        goToSlide(currentSlide-1);
    }

    function goToSlide(n) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].style.display = 'block';
    }

    document.querySelector('.carousel-control.prev').addEventListener('click', function() {
        prevSlide();
    });

    document.querySelector('.carousel-control.next').addEventListener('click', function() {
        nextSlide();
    });
});
