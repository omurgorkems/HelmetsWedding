// Düğün Tarihi
const weddingDate = new Date("Aug 8, 2025 18:00:00").getTime();

// Geri sayımı her saniye güncelle
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = days + " Gün " + hours + " Saat " +
        minutes + " Dakika " + seconds + " Saniye";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-timer").innerHTML = "Düğün Günü Geldi!";
    }
}, 1000);
