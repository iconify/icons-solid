import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dz255gbrp {
  d: path("M5 11h14c1.5 2 2.5 4.5 2.5 6.5c0 2.5-1.5 4-4 4h-11c-2.5 0-4-1.5-4-4c0-2 1-4.5 2.5-6.5m4-2.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.g8mu2bcde {
  d: path("M11.5 8.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M4 14h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dz255gbrp"/><path class="g8mu2bcde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cash-petty"} {...others} />);
}

export default Component;
