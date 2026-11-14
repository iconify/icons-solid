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

.l6ep-qvao {
  d: path("m3 11l3-7l3 7M4.25 8.5h3.5M15 13h6m-3 0v8m-2.5-4h5m-9-12.5H16a2 2 0 0 1 2 2V9");
}

.pmo02cy9m {
  d: path("m16 7.5l2 2l2-2m-7.5 12H8a2 2 0 0 1-2-2V15");
}

.pz92bfbaf {
  d: path("m4 16.5l2-2l2 2");
}
</style><g class="hntgybcog"><path class="l6ep-qvao"/><path class="pmo02cy9m"/><path class="pz92bfbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:language-switch"} {...others} />);
}

export default Component;
