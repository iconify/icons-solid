import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_-gw6caf {
  d: path("M11 7v4");
}

.gh7xyhbdv {
  d: path("M11 11h3");
}

.llc-u9kbe {
  d: path("M5 11a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yjzepunpt {
  d: path("M15.5 15.5 20 20");
}
</style><g class="s0phu2bbs"><path class="llc-u9kbe"/><path class="yjzepunpt"/><path class="f_-gw6caf"/><path class="gh7xyhbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:slow-query-outline-bold"} {...others} />);
}

export default Component;
