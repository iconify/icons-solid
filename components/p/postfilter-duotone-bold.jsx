import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a37_hz5ge {
  fill: currentColor;
  d: path("M3 11h18l-7 7v4h-4v-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.afqgjebgv {
  fill: currentColor;
  d: path("M5.5 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lgv20g91n {
  d: path("M3 11h18l-7 7v4h-4v-4Z");
}

.m68wh_s2h {
  d: path("m10.5 7 2 2");
}

.rqvtrb2by {
  d: path("M5.5 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="afqgjebgv"/><path class="a37_hz5ge"/><path class="rqvtrb2by"/><path class="m68wh_s2h"/><path class="lgv20g91n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:postfilter-duotone-bold"} {...others} />);
}

export default Component;
