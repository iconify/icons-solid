import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bz6fbcc0y {
  d: path("M11.975 2.25h.05a1.75 1.75 0 0 1 1.238.513l5.224 5.224A1.75 1.75 0 0 1 19 9.225V19.75a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 19.75V9.225a1.75 1.75 0 0 1 .513-1.238l5.224-5.224a1.75 1.75 0 0 1 1.238-.513");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqy2mev7y {
  d: path("M10.75 6.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m1.25 4v7.5m-3-3l3 3l3-3");
}
</style><g class="hntgybcog"><path class="bz6fbcc0y"/><path class="wqy2mev7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:discount-clearance"} {...others} />);
}

export default Component;
