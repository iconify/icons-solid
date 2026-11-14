import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fu_zv-bvl {
  d: path("M7.5 15q1.5-1.25 3 0t3 0t3 0M10 11.5l8-8m-4 8L20.5 5");
}

.s-l-cddke {
  d: path("M3.5 11.5h17a8.5 8.5 0 0 1-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s-l-cddke"/><path class="fu_zv-bvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:noodle-shop"} {...others} />);
}

export default Component;
