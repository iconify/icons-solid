import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iwfu3jbbx {
  d: path("M7 7.5h4V9l3 2.5V20a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 20v-8.5L7 9Zm2 0v-3H6.5V2.75h7l2 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utptugb4d {
  d: path("M6.75 13h4.5v5h-4.5Zm10-5.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm.75 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="iwfu3jbbx"/><path class="utptugb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:shampoo-bottle"} {...others} />);
}

export default Component;
