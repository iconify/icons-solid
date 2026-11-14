import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h04w61b7w {
  d: path("M3 13.75q9-7 18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nco8t8gvh {
  d: path("M3 17.5q9-7 18 0M3 10q9-7 18 0");
}
</style><g class="hntgybcog"><path class="nco8t8gvh"/><path class="h04w61b7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bimetallic-strip"} {...others} />);
}

export default Component;
