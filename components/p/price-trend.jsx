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

.jn05a6lxy {
  d: path("m3 17l5.5-6l4 3.5l8-8.5");
}

.v0jk3oopn {
  d: path("M16 6h4.5v4.5");
}
</style><g class="hntgybcog"><path class="jn05a6lxy"/><path class="v0jk3oopn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:price-trend"} {...others} />);
}

export default Component;
