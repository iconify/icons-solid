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

.kpptmb-qf {
  d: path("M6 6.25h12a2.5 4 0 0 1 0 8H6");
}

.w6teapbln {
  d: path("M3.5 10.25a2.5 4 0 1 0 5 0a2.5 4 0 1 0-5 0m-1 7.25h19");
}
</style><g class="hntgybcog"><path class="kpptmb-qf"/><path class="w6teapbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:yoga-bolster"} {...others} />);
}

export default Component;
