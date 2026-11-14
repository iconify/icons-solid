import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.au8lblbdt {
  d: path("M7.5 12.5v-7a3 3 0 0 1 6 0v7a5 5 0 1 1-6 0");
}

.d7my5z47k {
  d: path("M10.5 10v6.5M16.25 6h3m-3 4h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qaoj3_bnd {
  fill: currentColor;
  d: path("M8.5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="au8lblbdt"/><path class="qaoj3_bnd"/><path class="d7my5z47k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:thermometer-half"} {...others} />);
}

export default Component;
