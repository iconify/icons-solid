import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ar6h56e9e {
  d: path("M11 3h5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oiw-qyb_h {
  d: path("M8 21v-7c0-2 .75-3.75 2-5l6-6");
}
</style><g class="hntgybcog"><path class="oiw-qyb_h"/><path class="ar6h56e9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:arrow-curve-up-right"} {...others} />);
}

export default Component;
