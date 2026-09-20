import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bq0_6ubvh {
  d: path("M2 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.bsqy413qs {
  d: path("M16 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.ds7-fpf_b {
  d: path("M3 20v-5h4v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tz91nhk-p {
  d: path("M17 20v-5h4v5");
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="s0phu2bbs"><path class="x26a8iq1c"/><path class="bq0_6ubvh"/><path class="bsqy413qs"/><path class="ds7-fpf_b"/><path class="tz91nhk-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:parent-meeting-outline-bold"} {...others} />);
}

export default Component;
