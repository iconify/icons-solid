import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n8h6y7bhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.5V9h13V4.5M8.5 9h7v4h-7Zm-6-4.5h6m7 0h6M10 17.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="n8h6y7bhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:news-drone"} {...others} />);
}

export default Component;
