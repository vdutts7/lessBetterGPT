/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#3c2f65', //the main bg of chat interface
        secondary: '#433a5e', //sidebar bg
        error: '#FF001B',
        warningHover: '#e56865',
        warning: '#FF001B',
        good3: '#7626fb', //summarize and rephrase button
        good2: '#7626fb', //summarize and rephrase button
        good: '#c592ff',
        hover: '#c592ff',
        hover2: '#735bbc', // ... expand click thingy
        chat: '#735bbc',  //text area (send your message...)
      },
        opacity: {
        'hover': '.7',
      }
    }
  },
  plugins: []
};
