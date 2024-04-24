import { ImAccessibility } from "react-icons/im";
export default function Navbar() {
  return (
    <nav>
      <ImAccessibility size={55} color="white" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <button>SIGN IN</button>
        </li>
      </ul>
    </nav>
  );
}
