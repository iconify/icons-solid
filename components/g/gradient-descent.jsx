import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pkg4a5bjz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.75c2 9.75 5 15 9 15s7-5.25 9-15");
}

.vrdw_--oh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 9.5h.01m1.99 3.25h.01");
}

.xuqu7-bnz {
  cx: 12px;
  cy: 14.5px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="pkg4a5bjz"/><path class="vrdw_--oh"/><circle class="xuqu7-bnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gradient-descent"} {...others} />);
}

export default Component;
