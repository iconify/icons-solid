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

.o_p6d0y6q {
  d: path("M2.5 14c0-6 4-10 9-10C16 4 19 7.5 19 12v5.5a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2Z");
}

.uksgo5btf {
  d: path("M19 9.75h-8a2.25 2.25 0 0 0 0 4.5h8m0-4.5c2 0 3 1.75 2 4.25");
}
</style><g class="hntgybcog"><path class="o_p6d0y6q"/><path class="uksgo5btf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:helmet-tear-off"} {...others} />);
}

export default Component;
