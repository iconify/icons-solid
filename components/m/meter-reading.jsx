import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kodrrsbvl {
  d: path("M11.7 21H3V3h18v9.6");
}

.pxl_z7oip {
  d: path("M6 6.5h12V12H6Zm4 0V12m4-5.5V12m.5 9.5v-2l4.75-4.75l2 2l-4.75 4.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kodrrsbvl"/><path class="pxl_z7oip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:meter-reading"} {...others} />);
}

export default Component;
