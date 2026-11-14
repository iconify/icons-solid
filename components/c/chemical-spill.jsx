import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qo3qg9wsm {
  d: path("M2.5 4h11v7h-11Zm11 2H16v3h-2.5M16 7.5q3 .5 3 8.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vm41y1efy {
  d: path("M5.5 17.5a8 2.5 0 1 0 16 0a8 2.5 0 1 0-16 0Z");
}
</style><g class="ulnmmdpxh"><path class="qo3qg9wsm"/><path class="vm41y1efy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chemical-spill"} {...others} />);
}

export default Component;
