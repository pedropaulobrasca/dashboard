import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FaEye, FaEyeSlash, FaMailBulk, FaUser } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.logoGroup}>
            <Image src="/logo.svg" alt="logo" width={48} height={48} />
            <h3 className={styles.title}>Dashboard Kit</h3>
          </div>

          <div className={styles.description}>
            <p className={styles.descriptionTitle}>Log In to Dashboard Kit</p>
            <p className={styles.descriptionText}>
              Enter your email and password below
            </p>
          </div>

          <form>
            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  EMAIL
                </label>
                <div className={styles.formInputDiv}>
                  <input
                    className={styles.formInput}
                    type="email"
                    id="email"
                    placeholder="Email address"
                  />
                  <FaUser />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.formPassword}>
                  <label className={styles.formLabel} htmlFor="password">
                    PASSWORD
                  </label>
                  <span>Forgot password?</span>
                </div>
                <div className={styles.formInputDiv}>
                  <input
                    className={styles.formInput}
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                  <FaEyeSlash />
                </div>
              </div>

              <button className={styles.formButton} type="submit">
                Log In
              </button>
            </div>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don???t have an account?{' '}
              <a href="/signup" className={styles.footerLink}>
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
