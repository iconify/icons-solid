import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tr3i0d91k {
  d: path("M11.5 10H14v2.5");
}

.u70k4y_qc {
  d: path("m9 15 5 -5");
}
</style><g class="s0phu2bbs"><path class="b5ic9acln"/><path class="u70k4y_qc"/><path class="tr3i0d91k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:query-embed-outline-bold"} {...others} />);
}

export default Component;
