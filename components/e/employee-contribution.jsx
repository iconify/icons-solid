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

.j_sernfgs {
  d: path("m16 7l2 2l2-2");
}

.n7pw-_b2k {
  d: path("M4 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.5 17c0-3.25 2-5.25 4.5-5.25s4.5 2 4.5 5.25m3-3.5a3.5 1.75 0 1 0 7 0a3.5 1.75 0 1 0-7 0");
}

.wj8hgmbzi {
  d: path("M14.5 13.5V19a3.5 1.75 0 0 0 7 0v-5.5M13 5h5v4");
}
</style><g class="hntgybcog"><path class="n7pw-_b2k"/><path class="wj8hgmbzi"/><path class="j_sernfgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:employee-contribution"} {...others} />);
}

export default Component;
