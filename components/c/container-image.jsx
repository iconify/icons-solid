import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ci14j-blr {
  d: path("M11.835 19.531L11 20l-8-4.5V7l8-4.5L19 7v5.221");
}

.dn712m3vp {
  d: path("m3 7l8 4.5L19 7m-8 4.5v4.2m0 2.1V20m4-3.25L18.25 15l3.25 1.75l-3.25 1.75Zm0 2.75l3.25 1.75l3.25-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ci14j-blr"/><path class="dn712m3vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:container-image"} {...others} />);
}

export default Component;
