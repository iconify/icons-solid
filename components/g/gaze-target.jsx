import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_j6a3i_r {
  d: path("M2.5 12C5 6.5 8.25 4.25 12 4.25S19 6.5 21.5 12c-2.5 5.5-5.75 7.75-9.5 7.75S5 17.5 2.5 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pseu05ulv {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m4.5 0h.01");
}
</style><g class="hntgybcog"><path class="f_j6a3i_r"/><path class="pseu05ulv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gaze-target"} {...others} />);
}

export default Component;
