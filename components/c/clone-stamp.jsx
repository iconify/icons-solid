import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aj6k7brnw {
  d: path("M17.5 15.5v4m-2-2h4");
}

.hfsosnboc {
  d: path("M3.75 18.75h7.5");
}

.hk4_ptb-x {
  cx: 17.5px;
  cy: 17.5px;
  r: 3.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oc0544-xx {
  width: 9.5px;
  height: 4px;
  x: 2.75px;
  y: 10.75px;
  rx: 1.25px;
}

.t-dv42bmo {
  d: path("M6.25 7.75v3m2.5-3v3");
}

.z5ch1qbmv {
  cx: 7.5px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="z5ch1qbmv"/><path class="t-dv42bmo"/><rect class="oc0544-xx"/><path class="hfsosnboc"/><circle class="hk4_ptb-x"/><path class="aj6k7brnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:clone-stamp"} {...others} />);
}

export default Component;
