import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mvm2mhb-m {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c1.9 1.5 3 3.6 3 6.25v1.5H9V9c0-2.65 1.1-4.75 3-6.25");
}

.vcvk_gbik {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7.5h.01");
}

.xifeumbzf {
  width: 6.5px;
  height: 6px;
  x: 8.75px;
  y: 13px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.25px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yotlji_yj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.75 15.5l-3 2.5v3.25l3-1.75m6.5-4l3 2.5v3.25l-3-1.75");
}
</style><g class="y9tr6bcfx"><path class="mvm2mhb-m"/><path class="vcvk_gbik"/><rect class="xifeumbzf"/><path class="yotlji_yj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rocket-booster"} {...others} />);
}

export default Component;
