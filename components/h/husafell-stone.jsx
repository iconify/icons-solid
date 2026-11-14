import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qq3xlubyx {
  d: path("m4 8l7 2.5l4.5-7M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wmiyxc8qg {
  d: path("M14.079 20H7l-4.5-5L4 8l5-4.5h6.5l5 5l.425 5.527");
}
</style><g class="ulnmmdpxh"><path class="wmiyxc8qg"/><path class="qq3xlubyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:husafell-stone"} {...others} />);
}

export default Component;
