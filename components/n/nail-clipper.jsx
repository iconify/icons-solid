import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.huyutybox {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 16.25h.01");
}

.p-wqng6mx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 12l15.25-4.25M14 13.5v-3.1");
}

.x8x6b_wee {
  width: 15.5px;
  height: 4px;
  x: 2.75px;
  y: 14.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="x8x6b_wee"/><path class="p-wqng6mx"/><path class="huyutybox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:nail-clipper"} {...others} />);
}

export default Component;
