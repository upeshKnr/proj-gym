import styles from "./home.module.css";

const Nineth = () => {
  return (
    <div className={`${styles.nine} container sections-padding`}>
      <div>
        <p className="paragraph">Our Plans</p>
        <h2>Choose the Program</h2>
      </div>
      <div className={styles.plans}>
        <div className={styles.plan} data-aos="flip-up">
          <h3>
            <i className="fa-solid fa-heart"></i>
            Basic
          </h3>
          <div>
            <h4>$95 / 6 months</h4>
            <p>30% Off for Beginners</p>
          </div>
          <ul>
            <li>1 Day Free Trial</li>
            <li>20 minutes of heart-pumping spin</li>
            <li>20 minutes of strength training</li>
            <li>50 Class Times Available</li>
            <li>20 minutes of invigorating yoga</li>
          </ul>
          <a href="/From">
            <button>Get Started</button>
          </a>
        </div>
        <div className={styles.plan} data-aos="flip-up">
          <h3>
            <i className="fa-solid fa-star"></i>
            Standard
          </h3>
          <div>
            <h4>$120 / 6 months</h4>
            <p>Most popular</p>
          </div>
          <ul>
            <li>2 Week Free Trial</li>
            <li>30 minutes of heart-pumping spin</li>
            <li>30 minutes of strength training</li>
            <li>50 Class Times Available</li>
            <li>20 minutes of invigorating yoga</li>
            <li>Unlimited CrossFit Classes</li>
            <li>One Full Month Free</li>
            <li>First 25 New Members Only</li>
          </ul>
          <a href="/From">
            <button>Get Started</button>
          </a>
        </div>
        <div className={styles.plan} data-aos="flip-up">
          <h3>
            <i className="fa-solid fa-gem"></i>
            Premium
          </h3>
          <div>
            <h4>$150 / 6 months</h4>
            <p>10% Off for Yoga Class</p>
          </div>
          <ul>
            <li>2 Week Free Trial</li>
            <li>50 minutes of heart-pumping spin</li>
            <li>50 minutes of strength training</li>
            <li>60 Class Times Available</li>
            <li>50 minutes of invigorating yoga</li>
          </ul>

          <a href="/From">
            <button>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nineth;
