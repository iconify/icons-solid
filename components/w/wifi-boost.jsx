import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cczymubcm {
  d: path("M8.172 13.672a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0");
}

.g-_hgowat {
  d: path("M2.515 8.015a12 12 0 0 1 16.97 0M11 16.5h.01M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cczymubcm"/><path class="g-_hgowat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wifi-boost"} {...others} />);
}

export default Component;
