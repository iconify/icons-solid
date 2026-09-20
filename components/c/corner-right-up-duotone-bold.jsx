import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c13u6i4rp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h10V4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hil4ijbut {
  d: path("m9 9 5 -5 5 5");
}

.kd5og0akl {
  d: path("M4 20h10V4");
}

.m0gij1u5z {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 9 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c13u6i4rp"/><path class="m0gij1u5z"/><path class="kd5og0akl"/><path class="hil4ijbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:corner-right-up-duotone-bold"} {...others} />);
}

export default Component;
