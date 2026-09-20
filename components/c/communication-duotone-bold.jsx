import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9zkr6_8j {
  d: path("M9 17a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4 4 4 0 0 1 -4 4h-5a4 4 0 0 1 -4 -4");
}

.grk37x-os {
  d: path("M5 11v3l3 -3");
}

.kscrclbnc {
  d: path("M19 13v-3l-3 3");
}

.qvgnc-lug {
  fill: currentColor;
  d: path("M9 17a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4 4 4 0 0 1 -4 4h-5a4 4 0 0 1 -4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y-c_3vbcr {
  d: path("M2 7a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4 4 4 0 0 1 -4 4H6a4 4 0 0 1 -4 -4");
}

.z_tq0010d {
  fill: currentColor;
  d: path("M2 7a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4 4 4 0 0 1 -4 4H6a4 4 0 0 1 -4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="z_tq0010d"/><path class="qvgnc-lug"/><path class="y-c_3vbcr"/><path class="grk37x-os"/><path class="f9zkr6_8j"/><path class="kscrclbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:communication-duotone-bold"} {...others} />);
}

export default Component;
