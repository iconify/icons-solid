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

.jlxoo55py {
  d: path("M7.313 6h11.854a1.75 1.75 0 0 1 1.68 2.24l-2.48 8.5A1.75 1.75 0 0 1 16.688 18H4.833a1.75 1.75 0 0 1-1.68-2.24l2.48-8.5A1.75 1.75 0 0 1 7.313 6");
}

.laivgmbga {
  d: path("m11.5 6l-1 4l2 3l-1.5 5m1.5-5l4-1.5l3.25.5m-9.25-2L7 11.5l-2.75.5");
}
</style><g class="hntgybcog"><path class="jlxoo55py"/><path class="laivgmbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drought-cracked-earth"} {...others} />);
}

export default Component;
