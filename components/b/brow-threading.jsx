import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-u32e0rk {
  d: path("M3 17c4 4 6 4 9 0s5-4 9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5pfuvb4s {
  d: path("M2.5 11.5c3-7 11.5-10 19-4.5c-7.5-1-14 1-19 4.5M3 17c4-4 6-4 9 0s5 4 9 0");
}
</style><g class="hntgybcog"><path class="x5pfuvb4s"/><path class="g-u32e0rk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:brow-threading"} {...others} />);
}

export default Component;
