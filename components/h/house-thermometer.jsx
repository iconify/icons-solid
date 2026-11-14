import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_o3_obbf {
  d: path("M13.244 20.5H3.5v-10L12 3.25l8.5 7.25v1.356");
}

.h2vvt1b0q {
  d: path("M17 18v-3a1 1 0 0 1 2 0v3a2 2 0 1 1-2 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g_o3_obbf"/><path class="h2vvt1b0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:house-thermometer"} {...others} />);
}

export default Component;
