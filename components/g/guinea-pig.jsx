import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c3h0h9p8g {
  d: path("M5.5 9C4 5 9.5 3.5 9.75 7.25M7 17.25v1.5m9-1.5v1.5M6.5 11.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hr7ba0bev {
  d: path("M3.5 12.5a8.5 5.5 0 1 0 17 0a8.5 5.5 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="hr7ba0bev"/><path class="c3h0h9p8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:guinea-pig"} {...others} />);
}

export default Component;
