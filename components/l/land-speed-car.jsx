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

.tzn08qd0h {
  d: path("M4.5 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.zx4m8fbtd {
  d: path("M2.5 14V6.5L6 10h3.5a2.5 2.5 0 0 1 5 0l7 3l-1 1Z");
}
</style><g class="hntgybcog"><path class="zx4m8fbtd"/><path class="tzn08qd0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:land-speed-car"} {...others} />);
}

export default Component;
