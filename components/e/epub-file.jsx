import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.js0_fybwz {
  d: path("M14 2.5v5h5M8.5 12q2-1 3.5.5q1.5-1.5 3.5-.5v5.5q-2-1-3.5.5q-1.5-1.5-3.5-.5Zm3.5.5V18");
}

.vp3_m3b5w {
  d: path("M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-12Z");
}
</style><g class="hntgybcog"><path class="vp3_m3b5w"/><path class="js0_fybwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:epub-file"} {...others} />);
}

export default Component;
