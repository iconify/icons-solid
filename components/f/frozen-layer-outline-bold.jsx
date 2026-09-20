import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4k633d3m {
  d: path("M3 12a2.5 2.5 0 0 1 2.5 -2.5h13A2.5 2.5 0 0 1 21 12a2.5 2.5 0 0 1 -2.5 2.5h-13A2.5 2.5 0 0 1 3 12");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="mg7aqnbsf"/><path class="a4k633d3m"/><path class="jkuojibnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:frozen-layer-outline-bold"} {...others} />);
}

export default Component;
