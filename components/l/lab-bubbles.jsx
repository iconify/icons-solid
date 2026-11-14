import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkvq8fyeh {
  d: path("M4 3h1.5v15.5A2.5 2.5 0 0 0 8 21h8a2.5 2.5 0 0 0 2.5-2.5V3");
}

.w142sxbpy {
  d: path("M8.25 16.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4.25-5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M11 6h.01");
}
</style><g class="hntgybcog"><path class="vkvq8fyeh"/><path class="w142sxbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lab-bubbles"} {...others} />);
}

export default Component;
