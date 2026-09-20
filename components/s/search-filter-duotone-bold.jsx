import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k75umlios {
  fill: currentColor;
  d: path("M15 8h7l-2 2v8h-3v-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mktkir7xv {
  d: path("m5 13 -2 2");
}

.r441scx-k {
  d: path("M4 10a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.waz5v9y7f {
  fill: currentColor;
  d: path("M4 10a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wlknapbcp {
  d: path("M15 8h7l-2 2v8h-3v-8Z");
}
</style><g class="s0phu2bbs"><path class="waz5v9y7f"/><path class="k75umlios"/><path class="r441scx-k"/><path class="mktkir7xv"/><path class="wlknapbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:search-filter-duotone-bold"} {...others} />);
}

export default Component;
