import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mqi2_ac9e {
  d: path("M9.5 15.5 12 18l2.5 -2.5");
}

.r8vbx7bdh {
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s42i69yya {
  d: path("M9.5 18v3.5h5V18Z");
}
</style><g class="s0phu2bbs"><path class="r8vbx7bdh"/><path class="mqi2_ac9e"/><path class="s42i69yya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:hot-air-balloon-outline-bold"} {...others} />);
}

export default Component;
