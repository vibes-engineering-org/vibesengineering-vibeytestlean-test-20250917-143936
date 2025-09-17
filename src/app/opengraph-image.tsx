import { ImageResponse } from '@vercel/og';

export const alt = 'VibeyTest lean-test-20250917-143936';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            maxWidth: '900px',
            textAlign: 'center',
          }}
        >
          {/* Main title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            VibeyTest
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '32px',
              color: '#a0a0a0',
              marginBottom: '32px',
              fontWeight: 'normal',
              letterSpacing: '-0.01em',
            }}
          >
            lean-test-20250917-143936
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '24px',
              color: '#c0c0c0',
              marginBottom: '40px',
              maxWidth: '600px',
              lineHeight: 1.3,
            }}
          >
            A test application for vibes and interactions
          </div>

          {/* Creator badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 32px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              fontSize: '20px',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <span style={{ marginRight: '8px' }}>Created by</span>
            <span style={{ fontWeight: 'bold' }}>vibes.engineering</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}