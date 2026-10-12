import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.dd_zlcb1c {
  d: path("M10.5 17q1.5-.9 3 0");
}

.g06yjb6bk {
  cx: 15px;
  cy: 11.25px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.re_w6mbga {
  cx: 9px;
  cy: 11.25px;
  r: 2px;
}

.stvj_3i7l {
  d: path("M7.25 8.25L9.75 7m7 1.25L14.25 7");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="stvj_3i7l"/><circle class="re_w6mbga"/><circle class="g06yjb6bk"/><path class="dd_zlcb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:face-pleading"} {...others} />);
}

export default Component;
