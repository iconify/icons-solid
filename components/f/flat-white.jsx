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

.tiyl4eb5q {
  d: path("M17 7.25h1a2.25 2.25 0 0 1 0 4.5h-1.75M3 16.5q9 3 18 0");
}

.x_z33vbzn {
  d: path("M4 6h13v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z");
}
</style><g class="hntgybcog"><path class="x_z33vbzn"/><path class="tiyl4eb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flat-white"} {...others} />);
}

export default Component;
