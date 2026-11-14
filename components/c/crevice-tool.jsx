import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n498jz1nm {
  d: path("m16.596 5.99l3.182.353l-8.485 9.9l-3.536-3.536Z");
}

.rbydfgbqf {
  d: path("M7.05 12L12 16.95l-4.243 4.242l-4.949-4.949Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n498jz1nm"/><path class="rbydfgbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crevice-tool"} {...others} />);
}

export default Component;
