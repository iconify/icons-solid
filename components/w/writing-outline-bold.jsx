import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.jf8si_b8r {
  d: path("M6 13 16 3l3 3L9 16Z");
}

.onmmgdbjv {
  d: path("m6 13 -2 2v3h3l2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jf8si_b8r"/><path class="onmmgdbjv"/><path class="bos0j4biy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:writing-outline-bold"} {...others} />);
}

export default Component;
