import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cctq8ibwc {
  d: path("M14.25 21.25a.5.5 0 0 1-.5-.5a3.75 3.75 0 0 1 7.5 0a.5.5 0 0 1-.5.5ZM6.5 5.75a7.5 5 0 0 1 11 0m-.43-2.72l.43 2.72l-2.72.43");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j35vzzkcl {
  cx: 6.5px;
  cy: 11px;
  r: 2.5px;
}

.oag1fiv-v {
  cx: 17.5px;
  cy: 11px;
  r: 2.5px;
}

.ucplusbrw {
  d: path("M3.25 21.25a.5.5 0 0 1-.5-.5a3.75 3.75 0 0 1 7.5 0a.5.5 0 0 1-.5.5Z");
}
</style><g class="hntgybcog"><circle class="j35vzzkcl"/><path class="ucplusbrw"/><circle class="oag1fiv-v"/><path class="cctq8ibwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:employee-referral"} {...others} />);
}

export default Component;
