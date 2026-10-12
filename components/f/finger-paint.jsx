import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ji-lwpszm {
  width: 11px;
  height: 9.75px;
  x: 6.25px;
  y: 11.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 4.5px;
}

.q63y-pbsz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 9.25V7.5m3 1.25v-4m3 4V4m3 5.25V6m3.25 9.25l.75-2.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="ji-lwpszm"/><path class="q63y-pbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:finger-paint"} {...others} />);
}

export default Component;
