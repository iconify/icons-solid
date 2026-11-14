import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.gqsk-mblt {
  d: path("M5.5 13H11v5.5H5.5Z");
}

.sw4w7sb0q {
  d: path("M8.25 13v-2.75h5.5v5.5H11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_if79bzs {
  d: path("M11 10.25V7.5h5.5V13h-2.75");
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="gqsk-mblt"/><path class="sw4w7sb0q"/><path class="x_if79bzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:depth-map"} {...others} />);
}

export default Component;
