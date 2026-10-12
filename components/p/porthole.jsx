import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iywgnccvx {
  d: path("M9 12a3 3 0 0 1 3-3");
}

.uf66a5bkc {
  d: path("M12 6a6 6 0 1 0 0 12a6 6 0 1 0 0-12m7.07 8.93h.01m-4.15 4.14h.01m-5.87 0h.01m-4.15-4.14h.01m-.01-5.86h.01m4.13-4.14h.01m5.85 0h.01m4.13 4.14h.01");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="uf66a5bkc"/><path class="iywgnccvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:porthole"} {...others} />);
}

export default Component;
