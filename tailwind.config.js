/** @type {import('tailwindcss').Config} */


const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})

module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/ppperspective.svg')",
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        secondary: '#64748b',
        dark: '#0f172a',
        darkblue: '#02051c',
        sky: '#38bdf8',
        "color-blob": '#A427DF',
        "heading-color": '#081e21',
        "small-text-color": '#193256',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [rotateY],
}

