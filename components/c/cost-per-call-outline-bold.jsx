import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k4lkwhjuc {
  d: path("M4 20h9");
}

.oe1ogfbua {
  d: path("m15.5 14 2 2 -2 2");
}

.ph-bhccoq {
  d: path("M10 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tobs8svpc {
  d: path("M4 16h13");
}

.xienbiity {
  d: path("M7 7a5 5 0 1 0 10 0A5 5 0 1 0 7 7");
}
</style><g class="s0phu2bbs"><path class="xienbiity"/><path class="ph-bhccoq"/><path class="tobs8svpc"/><path class="oe1ogfbua"/><path class="k4lkwhjuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:cost-per-call-outline-bold"} {...others} />);
}

export default Component;
