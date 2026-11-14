import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tar1wkato {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3h3.5v3.5L10 9v11.5H3V9l1.75-2.5Zm10.5 4h3.5v3l1.75 2v8.5h-7V12l1.75-2ZM3 14h7m3.5 1.5h7");
}
</style><path class="tar1wkato"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:colour-dye-bottles"} {...others} />);
}

export default Component;
