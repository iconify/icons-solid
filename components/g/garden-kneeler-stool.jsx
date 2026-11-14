import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.udk4qshgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19v4h-19Zm2 0V6.5a2 2 0 0 1 4 0V13m7 0V6.5a2 2 0 0 1 4 0V13M5 17l-1.5 4.5M19 17l1.5 4.5");
}
</style><path class="udk4qshgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:garden-kneeler-stool"} {...others} />);
}

export default Component;
