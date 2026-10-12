import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bn940l_mc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 18.4h.01m9.99 0h.01");
}

.dl2x-xbrh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 15.5h15A1.5 1.5 0 0 1 21 17v2.75a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5V17a1.5 1.5 0 0 1 1.5-1.5m7.5 0V9.75");
}

.nw_26ibjx {
  cx: 12px;
  cy: 6.5px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="dl2x-xbrh"/><circle class="nw_26ibjx"/><path class="bn940l_mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:joystick"} {...others} />);
}

export default Component;
