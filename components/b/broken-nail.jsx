import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.trbpac85q {
  d: path("M9 18q3-2.5 6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zafg-cchn {
  d: path("M6.5 9c0-3.75 2.25-6 5.5-6h.5l1.25 3l1.5-1.25L16 7.5l1.5 1V16a5.5 5.5 0 0 1-11 0Z");
}
</style><g class="ulnmmdpxh"><path class="zafg-cchn"/><path class="trbpac85q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:broken-nail"} {...others} />);
}

export default Component;
