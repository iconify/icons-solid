import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-b_3nb4z {
  d: path("m12 8.75l2.25 3a2.5 2.5 0 1 1-4.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qa4hnfilf {
  d: path("M4 20C3 9 9 3 20 4c1 11-5 17-16 16m-1.5 1.5L4 20");
}
</style><g class="hntgybcog"><path class="qa4hnfilf"/><path class="a-b_3nb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dewdrop"} {...others} />);
}

export default Component;
