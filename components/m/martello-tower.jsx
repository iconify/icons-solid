import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dp9hi1b5p {
  d: path("M10.5 16.5v-3a1.5 1.5 0 0 1 3 0v3M3 20.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}

.oup90w9wv {
  d: path("M7 4.5h10l2 12H5Zm-.5 3h11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oup90w9wv"/><path class="dp9hi1b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:martello-tower"} {...others} />);
}

export default Component;
