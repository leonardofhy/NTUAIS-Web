// Extend the Blowfish theme's Tailwind configuration
module.exports = {
  presets: [
    require('./themes/blowfish/tailwind.config.js')
  ],
  theme: {
    extend: {
      // Custom spacing values
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      // Border radius values aligned with design system
      borderRadius: {
        'card': '12px',
        'card-lg': '16px',
      },
      // Custom transition durations
      transitionDuration: {
        '400': '400ms',
      },
      // Background gradients for hover effects
      backgroundImage: {
        'gradient-green-hover': 'linear-gradient(to bottom, rgba(34,197,94,0.3), rgba(34,197,94,0.1), transparent)',
        'gradient-purple-hover': 'linear-gradient(to bottom, rgba(168,85,247,0.3), rgba(168,85,247,0.1), transparent)',
      },
      // Map custom CSS variables to Tailwind color classes
      colors: {
        'linear-text': 'var(--linear-text)',
        'linear-text-bright': 'var(--linear-text-bright)',
        'linear-muted': 'var(--linear-muted)',
        'linear-bg': 'var(--linear-bg)',
        'linear-bg-card': 'var(--linear-bg-card)',
        'linear-border': 'var(--linear-border)',
        'linear-border-subtle': 'var(--linear-border-subtle)',
      }
    }
  }
};
