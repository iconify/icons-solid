import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwdac6bly {
  d: path("m18.5 21.25l-2.75-2.75a2 2 0 0 1 2.75-2.25a2 2 0 0 1 2.75 2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-75gvtfw {
  d: path("M14.8 21.5H4v-19h14v10.8M4 9h14M7.25 5v1.5m0 5.25v3.75");
}
</style><g class="ulnmmdpxh"><path class="y-75gvtfw"/><path class="qwdac6bly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:food-share-fridge"} {...others} />);
}

export default Component;
