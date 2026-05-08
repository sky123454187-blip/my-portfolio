import { useState } from 'react';
import './App.css';

import img1 from '../public/封面感.jpg';
import img2 from '../public/AI功能.jpg';
import img3 from '../public/個人化背景.jpg';
import img4 from '../public/功能圖示.jpg';
import img5 from '../public/設定選單.jpg';

// 作品數據
const portfolioData = [
  {
    id: 1,
    title: '筆記應用',
    description: '支持創建、編輯、刪除筆記，自動保存到本地存儲。響應式設計，適配各種設備。',
    tech: ['React', 'localStorage', 'CSS'],
    link: 'https://easymemo.pages.dev/',
    images: [img1, img2, img3, img4, img5]
  },
  {
    id: 2,
    title: '消防排煙量計算',
    description: '專業的排煙量計算工具，支持快速計算和導出結果。實用的工程輔助應用。',
    tech: ['React', 'JavaScript', 'Design'],
    link: 'https://easymemo.neocities.org/5V5V',
    images: []
  },
  {
    id: 3,
    title: '趣味抽獎應用',
    description: '互動式抽獎工具，支持自定義獎項和多輪抽獎。適合各種活動和遊戲場景。',
    tech: ['React', 'PWA', 'Canvas'],
    link: 'https://easymemo.neocities.org/LUCKYPWA/',
    images: []
  },
  {
    id: 4,
    title: '台灣天氣應用',
    description: '完整的台灣鄉鎮天氣預報應用。支持搜尋全台368個鄉鎮市、收藏最愛、7天預報、多城市比較等功能。',
    tech: ['React', 'Open-Meteo API', '地理數據'],
    link: 'https://my-weather-app-b3z.pages.dev/',
    images: []
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      {/* 導航欄 */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          <div className="nav-links">
            <button
              className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('home')}
            >
              首頁
            </button>
            <button
              className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('portfolio')}
            >
              作品集
            </button>
            <button
              className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('about')}
            >
              關於我
            </button>
            <button
              className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('contact')}
            >
              聯繫我
            </button>
          </div>
        </div>
      </nav>

      {/* 頁面內容 */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* 底部 */}
      <footer className="footer">
        <p>&copy; 2026 My Portfolio. 保留所有權利。</p>
      </footer>
    </div>
  );
}

// 首頁組件
function HomePage() {
  return (
    <section className="page home-page">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">嗨，我是 Sky</h1>
          <p className="hero-subtitle">Web Developer / Creative Builder</p>
          <p className="hero-description">
            我喜歡用代碼創造有趣且實用的網站和應用。<br />
            無論是工具應用、計算器還是互動遊戲，<br />
            我都盡力做到美觀易用。
          </p>
        </div>
        <div className="hero-image">
          <div className="avatar">💻</div>
        </div>
      </div>
    </section>
  );
}

// 圖片輪播組件
function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="no-images">
        <p>暫無截圖</p>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-carousel">
      <div className="carousel-image">
        <img src={images[currentIndex]} alt={`項目截圖 ${currentIndex + 1}`} />
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={goToPrevious}>❮</button>
          <button className="carousel-btn next" onClick={goToNext}>❯</button>
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// 作品集頁面
function PortfolioPage() {
  return (
    <section className="page portfolio-page">
      <h2 className="page-title">我的作品</h2>
      <div className="portfolio-grid">
        {portfolioData.map(project => (
          <div key={project.id} className="portfolio-card">
            {project.images && project.images.length > 0 && (
              <ImageCarousel images={project.images} />
            )}
            <div className="card-header">
              <h3>{project.title}</h3>
            </div>
            <p className="card-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">查看項目 →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

// 關於我頁面
function AboutPage() {
  return (
    <section className="page about-page">
      <h2 className="page-title">關於我</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>我的故事</h3>
          <p>
            我是一位熱情的 Web 開發者，喜歡用代碼解決實際問題。
            無論是工具應用、計算器還是互動遊戲，我都致力於創造出既好用又好看的產品。
          </p>
          <p>
            我的開發理念是：
            簡單易用的界面 + 完善的功能 + 美觀的設計 = 優秀的應用
          </p>

          <h3 style={{ marginTop: '30px' }}>我的技能</h3>
          <div className="skills">
            <div className="skill-item">
              <strong>前端技術</strong>
              <p>HTML, CSS, JavaScript, React, Vite</p>
            </div>
            <div className="skill-item">
              <strong>應用開發</strong>
              <p>PWA, 響應式設計, 本地存儲</p>
            </div>
            <div className="skill-item">
              <strong>部署發布</strong>
              <p>NEOCITIES, GitHub Pages, Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 聯繫我頁面
function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.target;
    const formData = new FormData(formElement);

    try {
      const response = await fetch('https://formspree.io/f/xyzpqrst', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitMessage('✅ 留言已發送！我會盡快回覆你。');
        formElement.reset();
        setTimeout(() => setSubmitMessage(''), 3000);
      } else {
        setSubmitMessage('❌ 發送失敗，請稍後重試。');
      }
    } catch (error) {
      setSubmitMessage('❌ 發送失敗，請檢查網絡連接。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page contact-page">
      <h2 className="page-title">聯繫我</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>讓我們聯繫</h3>
          <p>有什麼問題或想法？歡迎與我聯繫！</p>
          <div className="contact-methods">
            <div className="contact-method">
              <span className="icon">📧</span>
              <div>
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>郵件</p>
                <a href="mailto:easymemo.tw@gmail.com" style={{ color: '#667eea', textDecoration: 'none' }}>
                  easymemo.tw@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-method">
              <span className="icon">🌐</span>
              <div>
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>我的網站</p>
                <a href="https://easymemo.neocities.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'none' }}>
                  easymemo.neocities.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>名字</label>
            <input
              type="text"
              name="name"
              placeholder="請輸入你的名字"
              required
            />
          </div>
          <div className="form-group">
            <label>郵箱</label>
            <input
              type="email"
              name="email"
              placeholder="請輸入你的郵箱"
              required
            />
          </div>
          <div className="form-group">
            <label>留言</label>
            <textarea
              name="message"
              placeholder="請輸入你的留言"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? '發送中...' : '發送留言'}
          </button>
          {submitMessage && (
            <p style={{ textAlign: 'center', color: 'white', marginTop: '10px' }}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
