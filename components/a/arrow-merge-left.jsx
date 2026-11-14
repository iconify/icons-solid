import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eoeoqudwa {
  d: path("M21 5h-2.5c-4 0-4.5 7-8.5 7H3.5M21 19h-2.5c-4 0-4.5-7-8.5-7");
}

.h15vce0kf {
  d: path("M7 8.5L3.5 12L7 15.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoeoqudwa"/><path class="h15vce0kf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:arrow-merge-left"} {...others} />);
}

export default Component;
