import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-7e6lbcn {
  d: path("M9 3c0 4.5 6 4.5 6 9s-6 4.5-6 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpi_duy8f {
  d: path("M15 3c0 4.5-6 4.5-6 9s6 4.5 6 9m-6-9h6M6 8l-3.5 4L6 16m12-8l3.5 4l-3.5 4");
}
</style><g class="hntgybcog"><path class="e-7e6lbcn"/><path class="zpi_duy8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bioinformatics"} {...others} />);
}

export default Component;
