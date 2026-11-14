import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n1205gbhc {
  d: path("M3.5 2.5h10V15h-10Zm12 8h4v5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4whnwbhn {
  d: path("m9.25 5l-2.5 4.25H8.5l-.75 3.25l2.5-4.5H8.5ZM8.5 15v2.25c0 4 9 4 9 0V15.5m-.75-5v-2m1.5 2v-2");
}
</style><g class="ulnmmdpxh"><path class="n1205gbhc"/><path class="y4whnwbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ev-charger-home"} {...others} />);
}

export default Component;
