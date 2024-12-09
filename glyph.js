function createGlyphBackground() {
    const glyphs = '♔♕♖♗♘♙♚♛♜♝♞♟︎⚀⚁⚂⚃⚄⚅☰☱☲☳☴☵☶☷';
    const background = document.querySelector('.glyph-background');
    const columns = Math.floor(window.innerWidth / 20);
    const rows = Math.floor(window.innerHeight / 20);

    function createGlyph() {
        const span = document.createElement('span');
        span.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
        span.style.position = 'absolute';
        span.style.left = `${Math.random() * 100}%`;
        span.style.top = `${Math.random() * 100}%`;
        span.style.fontSize = '20px';
        span.style.opacity = Math.random();
        span.style.transform = `rotate(${Math.random() * 360}deg)`;
        return span;
    }

    function init() {
        background.innerHTML = '';
        const totalGlyphs = columns * rows;
        
        for (let i = 0; i < totalGlyphs; i++) {
            background.appendChild(createGlyph());
        }
    }

    init();
    window.addEventListener('resize', init);
}

document.addEventListener('DOMContentLoaded', createGlyphBackground);