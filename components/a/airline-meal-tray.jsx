import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.k7___7b8v {
  d: path("M5.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm8.75-2.5h4.5m-4.5 0a2.25 2.25 0 0 1 4.5 0m-4 3h3.5L17.5 17h-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="k7___7b8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:airline-meal-tray"} {...others} />);
}

export default Component;
