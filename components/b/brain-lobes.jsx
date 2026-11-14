import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d34mslbpq {
  d: path("M11 4c-1.5 4 1.5 9-1 14.75M17 4.5c-2 3.5 1 7.5-1 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vpaf6rn5f {
  d: path("M5.5 16.5A3.25 3.25 0 0 1 3.25 11a3.25 3.25 0 0 1 2.5-5.5A3 3 0 0 1 11 4a3.5 3.5 0 0 1 6 .5a3 3 0 0 1 3.25 4a3 3 0 0 1-.75 5.5a3 3 0 0 1-3.5 2.5a7 7 0 0 1-10.5 0M14 18l1 3.5");
}
</style><g class="hntgybcog"><path class="vpaf6rn5f"/><path class="d34mslbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:brain-lobes"} {...others} />);
}

export default Component;
