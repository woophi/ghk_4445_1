import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  backgroundColor: '#fff',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: '#fff',
  borderRadius: '0 0 32px 32px',
});
const containerBottom = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const chat = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  variants: {
    position: {
      right: {
        alignItems: 'flex-end',
      },
    },
  },
});

const chatBubble = recipe({
  base: {
    padding: '8px 16px',
    backgroundColor: '#F3F4F5',
    maxWidth: '100%',
    width: 'max-content',
  },
  variants: {
    position: {
      top: {
        borderRadius: '16px 16px 16px 8px',
      },
      middle: {
        borderRadius: '8px 16px 16px 16px',
      },
      bottom: {
        borderRadius: '8px 16px 16px 16px',
      },
    },
  },
});
const chatBubbleTr = recipe({
  base: {
    padding: '8px 16px',
    backgroundColor: 'transparent',
    maxWidth: '100%',
    width: 'max-content',
    border: '1px solid #7F7F8333',
  },
  variants: {
    position: {
      top: {
        borderRadius: '16px 16px 8px 16px',
      },
      middle: {
        borderRadius: '16px 8px 8px 16px',
      },
      bottom: {
        borderRadius: '16px 8px 16px 16px',
      },
    },
  },
});

export const btmContent = style({
  padding: 0,
});

export const appSt = {
  bottomBtn,
  container,
  chatBubble,
  chat,
  containerBottom,
  chatBubbleTr,
  btmContent,
};
