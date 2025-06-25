import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styling/index.css";
import HomePage from "./components/HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
