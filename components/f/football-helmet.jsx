import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zycdblkzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20c-2-3.5-2-7.5-.5-10.5c2-3.5 5.5-5 8.5-5c4.5 0 7.5 3.5 7.5 8h-7V17c0 2-1.5 3-3.5 3Zm15.5-7.5V20h-4m-3-4h7M9 13h.01");
}
</style><path class="zycdblkzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:football-helmet"} {...others} />);
}

export default Component;
