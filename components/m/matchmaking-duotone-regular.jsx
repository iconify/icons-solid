import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pm30vmtce {
  d: path("M2 9a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.qtxvlht3c {
  d: path("M8 17h8");
}

.vc2-n5bxy {
  d: path("m11 14 -3 3 3 3");
}

.vyrk3096t {
  fill: currentColor;
  d: path("M14 9a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w_nev909g {
  d: path("m13 14 3 3 -3 3");
}

.w1wi7obvc {
  fill: currentColor;
  d: path("M2 9a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xr2rcq_ip {
  d: path("M14 9a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="nrj6p8qat"><path class="w1wi7obvc"/><path class="vyrk3096t"/><path class="pm30vmtce"/><path class="xr2rcq_ip"/><path class="qtxvlht3c"/><path class="vc2-n5bxy"/><path class="w_nev909g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:matchmaking-duotone-regular"} {...others} />);
}

export default Component;
