import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.exre5jj_d {
  d: path("m12 15 -4.5 -4.5");
}

.jwnes9bsk {
  d: path("M8 19h8");
}

.l2nbo7bgf {
  d: path("M4 15a8 8 0 0 1 16 0");
}

.m-p3hbclp {
  d: path("M4 15h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="l2nbo7bgf"/><path class="m-p3hbclp"/><path class="exre5jj_d"/><path class="jwnes9bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:fuel-level-outline-bold"} {...others} />);
}

export default Component;
