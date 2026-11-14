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

.o3oq51b7t {
  fill: currentColor;
  d: path("m11.562 6.156l5.578 3.647a2.625 2.625 0 0 1 0 4.394l-5.578 3.647A2.625 2.625 0 0 1 7.5 15.647V8.353a2.625 2.625 0 0 1 4.062-2.197");
}

.sohq57b0j {
  d: path("M3.5 4v16");
}
</style><g class="hntgybcog"><path class="sohq57b0j"/><path class="o3oq51b7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:navigation-start"} {...others} />);
}

export default Component;
