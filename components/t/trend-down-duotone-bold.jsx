import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5y0d7xbc {
  d: path("M17 17h4v-4");
}

.l_bz9jb0c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 17h4v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pxhtn-byk {
  d: path("m3 7 6 6 4 -4 8 8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yd8f2vbnr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 7 6 6 4 -4 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yd8f2vbnr"/><path class="l_bz9jb0c"/><path class="pxhtn-byk"/><path class="f5y0d7xbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:trend-down-duotone-bold"} {...others} />);
}

export default Component;
