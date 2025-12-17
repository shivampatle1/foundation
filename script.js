document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize Animations
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // 2. Mobile Menu Auto-Close
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if(menuToggle.classList.contains('show')) bsCollapse.toggle();
        });
    });

    // 3. WHATSAPP FORM SUBMISSION LOGIC
    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
        e.preventDefault(); // फॉर्म को सामान्य तरीके से सबमिट होने से रोकें

        // वैल्यू निकालें
        const name = document.getElementById('name').value;
        const father = document.getElementById('fatherName').value;
        const address = document.getElementById('address').value;
        const mobile = document.getElementById('mobile').value;
        
        // मैसेज तैयार करें
        const message = `*नया सदस्य आवेदन (Raja Bhoj Foundation)*%0a%0a` +
                        `*नाम:* ${name}%0a` +
                        `*पिता का नाम:* ${father}%0a` +
                        `*पता:* ${address}%0a` +
                        `*मोबाइल:* ${mobile}%0a%0a` +
                        `कृपया मुझे सदस्य बनाएं।`;

        // WhatsApp खोलें (आपके नंबर पर)
        const myNumber = "919691429646"; 
        const url = `https://wa.me/${myNumber}?text=${message}`;

        window.open(url, '_blank').focus();
    });
});

// 4. Button Text Toggle (Optional: Change 'Read More' to 'Close')
const collapseButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
collapseButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.innerText.includes('जानें') || this.innerText.includes('Read')) {
            this.innerHTML = 'बंद करें (Close) <i class="bi bi-chevron-up"></i>';
        } else {
            this.innerHTML = 'जानकारी पढ़ें <i class="bi bi-chevron-down"></i>';
        }
    });
});