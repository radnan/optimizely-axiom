import type { ComponentPropsWithRef } from "react";

export const IconUnchecked = (props: ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      height="8"
      viewBox="0 0 12 8"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 3.47059L4.83333 7L10.5 1"
        stroke="red"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
