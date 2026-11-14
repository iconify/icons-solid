import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gjzf_kbnd {
  d: path("M13 11.75a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0m0 5.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0m-10-5.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0m0 5.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sv5_a61rn {
  d: path("M9.5 2.5h5m-2.5 0V12m-2.5 2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="sv5_a61rn"/><path class="gjzf_kbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fan-ceiling"} {...others} />);
}

export default Component;
