import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w-dzzdb7w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5c0-6.5 4-9 9-9s9 2.5 9 9Zm6 0l-.5 7A1.5 1.5 0 0 0 10 21h4a1.5 1.5 0 0 0 1.5-1.5l-.5-7");
}
</style><path class="w-dzzdb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fungus"} {...others} />);
}

export default Component;
