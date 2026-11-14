import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_p0be2-x {
  d: path("M7 20.5h9c1.5-3.5 1-7-1.5-10C13 8.75 13.5 6 16 4c-6.5.5-11.5 7-9 16.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z9ra4rcwi {
  d: path("M10 18c-.5-4 .5-7.5 3-10");
}
</style><g class="ulnmmdpxh"><path class="e_p0be2-x"/><path class="z9ra4rcwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bulb-garlic-clove"} {...others} />);
}

export default Component;
