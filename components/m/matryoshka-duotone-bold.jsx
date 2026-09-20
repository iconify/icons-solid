import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k_2z93bzc {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l5k4yiboy {
  fill: currentColor;
  d: path("m12 3 9 9 -9 9 -9 -9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ra5uied2u {
  d: path("m12 7.5 4.5 4.5 -4.5 4.5L7.5 12Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tngfrxbch {
  fill: currentColor;
  d: path("m12 7.5 4.5 4.5 -4.5 4.5L7.5 12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x6ma3nbxt {
  d: path("m12 3 9 9 -9 9 -9 -9Z");
}
</style><g class="s0phu2bbs"><path class="l5k4yiboy"/><path class="tngfrxbch"/><path class="k_2z93bzc"/><path class="x6ma3nbxt"/><path class="ra5uied2u"/><path class="n3p0zmbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:matryoshka-duotone-bold"} {...others} />);
}

export default Component;
