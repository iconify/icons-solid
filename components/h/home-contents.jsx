import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gllv8yijc {
  d: path("M5 13v-3a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 19 10v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ie_rp7b5m {
  d: path("M2.5 14.5A1.5 1.5 0 0 1 5 13v3.5h14V13a1.5 1.5 0 0 1 2.5 1.5v4h-19Zm2.5 4v2m14-2v2");
}
</style><g class="hntgybcog"><path class="gllv8yijc"/><path class="ie_rp7b5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:home-contents"} {...others} />);
}

export default Component;
