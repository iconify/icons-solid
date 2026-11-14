import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hff_2qbds {
  d: path("M6.5 11h11v7h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vxxn6ybuj {
  d: path("M3 3h18v18H3Zm10.5 4h.01M17 7h.01");
}
</style><g class="ulnmmdpxh"><path class="vxxn6ybuj"/><path class="hff_2qbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:oven"} {...others} />);
}

export default Component;
