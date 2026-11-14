import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_hgu5bmn {
  d: path("m17 12.5l2.5 2.5l-2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oxs1q1bae {
  d: path("M4.5 20.5V7.75a4.25 4.25 0 0 1 8.5 0v3.75a3.5 3.5 0 0 0 3.5 3.5h3");
}
</style><g class="hntgybcog"><path class="oxs1q1bae"/><path class="d_hgu5bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hairpin-turn-right"} {...others} />);
}

export default Component;
