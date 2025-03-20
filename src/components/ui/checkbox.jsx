import { useState } from "react";

const GlowingCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="relative cursor-pointer w-20 h-20 transform transition-transform duration-500 hover:rotate-x-10 hover:rotate-y-10">
      <input
        type="checkbox"
        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div
        className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300 shadow-lg
          ${
            checked
              ? "bg-gray-900 shadow-cyan-500/50 animate-pulse"
              : "bg-cyan-400 shadow-cyan-300"
          }`}
      >
        <div
          className={`absolute w-[150%] h-[150%] top-[-25%] left-[-25%] rounded-2xl transition-all duration-500
          ${
            checked
              ? "opacity-100 scale-100 rotate-0 bg-gradient-to-r from-green-400 to-cyan-400 animate-gradient"
              : "opacity-0 scale-0 rotate-180"
          }`}
        />
        <span
          className={`absolute top-1/2 left-1/2 text-white text-4xl font-bold transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500
          ${
            checked
              ? "opacity-100 scale-100 rotate-0 drop-shadow-lg"
              : "opacity-0 scale-50 rotate-[-45deg]"
          }`}
        >
          ✓
        </span>
      </div>
    </label>
  );
};

export default GlowingCheckbox;
