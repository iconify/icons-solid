import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ds98_ox3w {
  cx: 6.34px;
  cy: 6.34px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nfgvosgrx {
  d: path("M10.34 4.18a8 8 0 1 1-6.16 6.16");
}

.ons53cb4g {
  cx: 12px;
  cy: 12px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="ons53cb4g"/><path class="nfgvosgrx"/><circle class="ds98_ox3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:solar-system"} {...others} />);
}

export default Component;
