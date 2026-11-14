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

.m6kkv_bev {
  d: path("M2.5 7.5A2.5 2.5 0 0 1 5 5h6a2.5 2.5 0 0 1 2.5 2.5V13a2.5 2.5 0 0 1-2.5 2.5H8.5l-3 3v-3H5A2.5 2.5 0 0 1 2.5 13Zm11 2.5h3l4-4m-4 4l4 4");
}

.rnbphpbjs {
  d: path("M18 6h2.5v2.5m0 3V14H18");
}
</style><g class="hntgybcog"><path class="m6kkv_bev"/><path class="rnbphpbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chat-routing"} {...others} />);
}

export default Component;
