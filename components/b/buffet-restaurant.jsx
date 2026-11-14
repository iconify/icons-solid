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

.lt13xzbfp {
  d: path("M10.5 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-5 10L7 20h10l1.5-4");
}

.wn6-bq65w {
  d: path("M3.5 16a8.5 8.5 0 0 1 17 0m-18 0h19");
}
</style><g class="hntgybcog"><path class="wn6-bq65w"/><path class="lt13xzbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:buffet-restaurant"} {...others} />);
}

export default Component;
