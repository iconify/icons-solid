import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hq5e0hzjl {
  d: path("M9.5 4q-1 8 0 16m5-16q1 8 0 16");
}

.l-rrlcb8w {
  d: path("M5 5q7-2.5 14 0q2.5 7 0 14q-7 2.5-14 0q-2.5-7 0-14Z");
}

.mhrzs30pu {
  d: path("M4 9.5q8-1 16 0m-16 5q8 1 16 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l-rrlcb8w"/><path class="hq5e0hzjl"/><path class="mhrzs30pu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lens-distortion"} {...others} />);
}

export default Component;
