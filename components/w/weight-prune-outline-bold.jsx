import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqnqxwbgv {
  d: path("m7.5 10 2.5 2.5");
}

.lzyo_l7yh {
  d: path("m14.5 9 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uobwinb1c {
  d: path("M2 7.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.urzylvb1v {
  d: path("M9 14.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.xbfxmobjr {
  d: path("M16 7.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.yc7uj-bdi {
  d: path("M16.5 10 14 12.5");
}
</style><g class="s0phu2bbs"><path class="uobwinb1c"/><path class="xbfxmobjr"/><path class="urzylvb1v"/><path class="iqnqxwbgv"/><path class="yc7uj-bdi"/><path class="lzyo_l7yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:weight-prune-outline-bold"} {...others} />);
}

export default Component;
