import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.elv-wibvt {
  d: path("M4 18v-4.5a8 8 0 0 1 16 0V18h-3.5v-2.5h-9V18Z");
}

.h8jx8ylsg {
  d: path("M7 8.5h10V12H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="elv-wibvt"/><path class="h8jx8ylsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ski-helmet"} {...others} />);
}

export default Component;
