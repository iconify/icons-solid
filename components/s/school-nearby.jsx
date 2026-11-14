import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ev_0jfbfy {
  fill: currentColor;
  d: path("M11 7.75c0-1.25.25-2 1-2s1 .75 1 2Z");
}

.h11fedc8z {
  d: path("M9.75 9.25V4.5h4.5v4.75M9 4.5l3-2l3 2");
}

.i-pz51w1f {
  d: path("M10 21.5v-5h4v5m-9-5h.01m13.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wtqdhab8k {
  d: path("M2.5 21.5V13H7v-2l5-3.5l5 3.5v2h4.5v8.5Z");
}
</style><g class="ulnmmdpxh"><path class="wtqdhab8k"/><path class="h11fedc8z"/><path class="ev_0jfbfy"/><path class="i-pz51w1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:school-nearby"} {...others} />);
}

export default Component;
