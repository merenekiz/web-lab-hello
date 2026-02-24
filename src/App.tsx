import "./App.css";

export default function App() {
  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul className="nav">
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>

        {/* Sayfadaki TEK h1 */}
        <h1>Kisisel Portfoy</h1>
      </header>

      <main id="main-content">
        {/* Hakkımda */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>

          <figure>
            {/* Foto koyacaksan /public altına koyup /profil.jpg diye çağır */}
            <img src="/profil.jpg" alt="merenekiz profil fotografi" />
            <figcaption>merenekiz</figcaption>
          </figure>

          <p>
            yazilim muh. ogrencisi
          </p>
        </section>

        {/* Projeler */}
        <section id="projeler">
          <h2>Projeler</h2>

          {/* En az 2 adet article */}
          <article className="card">
            <h3>E-Ticaret Takip Otomasyonu</h3>
            <p>e ticaret satıcıları için ticareti etkinlikleri takip otomasyonu</p>
            <p><strong>Teknolojiler:</strong> c# , windows form</p>
          </article>

          <article className="card">
            <h3>Gercek Zamanli Ulasim Platformu</h3>
            <p>Kullanicilara ulasim ve seyahat planlama yardimi sunan bir web uygulamasi.</p>
            <p><strong>Teknolojiler:</strong> Next.js, Harita API’leri (planlanan)</p>
          </article>
        </section>

        {/* İletişim */}
        <section id="iletisim">
          <h2>Iletisim</h2>

          <form noValidate className="form">
            <fieldset>
              <legend>Bana Ulas</legend>

              {/* Ad Soyad */}
              <div className="field">
                <label htmlFor="adSoyad">Ad Soyad</label>
                <input
                  id="adSoyad"
                  name="adSoyad"
                  type="text"
                  required
                  minLength={2}
                  aria-describedby="adSoyad-error"
                />
                <small id="adSoyad-error" role="alert" className="error-msg"></small>
              </div>

              {/* Email */}
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" role="alert" className="error-msg"></small>
              </div>

              {/* Konu */}
              <div className="field">
                <label htmlFor="konu">Konu</label>
                <select
                  id="konu"
                  name="konu"
                  required
                  aria-describedby="konu-error"
                  defaultValue=""
                >
                  <option value="" disabled>Seciniz</option>
                  <option value="isbirligi">Soru</option>
                  <option value="diger">Diger</option>
                </select>
                <small id="konu-error" role="alert" className="error-msg"></small>
              </div>

              {/* Mesaj */}
              <div className="field">
                <label htmlFor="mesaj">Mesaj</label>
                <textarea
                  id="mesaj"
                  name="mesaj"
                  required
                  minLength={10}
                  rows={5}
                  aria-describedby="mesaj-error"
                />
                <small id="mesaj-error" role="alert" className="error-msg"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} merenekiz</p>
      </footer>
    </>
  );
}