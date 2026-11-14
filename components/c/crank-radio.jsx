import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ediyfmbyd {
  d: path("M7.5 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h6");
}

.h21n0dbod {
  d: path("M4 8h16v12H4Zm12 0l3.5-5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h21n0dbod"/><path class="ediyfmbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crank-radio"} {...others} />);
}

export default Component;
