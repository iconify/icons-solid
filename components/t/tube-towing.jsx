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

.sps7n8xqc {
  d: path("M5 16.5a7.5 7.5 0 1 1 12 0");
}

.vrb0_cc4g {
  d: path("M8.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-6 5h19M6 20h10m.25-13.25L21.5 2.5");
}
</style><g class="hntgybcog"><path class="sps7n8xqc"/><path class="vrb0_cc4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tube-towing"} {...others} />);
}

export default Component;
