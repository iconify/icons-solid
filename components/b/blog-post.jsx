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

.kuknfnbhx {
  d: path("M8.375 2.5h7.25A4.375 4.375 0 0 1 20 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-7.25A4.375 4.375 0 0 1 4 17.125V6.875A4.375 4.375 0 0 1 8.375 2.5");
}

.pgh9l-bjx {
  d: path("M8.75 5.5h6.5A1.75 1.75 0 0 1 17 7.25v2A1.75 1.75 0 0 1 15.25 11h-6.5A1.75 1.75 0 0 1 7 9.25v-2A1.75 1.75 0 0 1 8.75 5.5M7 14.5h10M7 18h6");
}
</style><g class="hntgybcog"><path class="kuknfnbhx"/><path class="pgh9l-bjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blog-post"} {...others} />);
}

export default Component;
