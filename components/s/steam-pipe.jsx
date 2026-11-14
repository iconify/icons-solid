import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifurj9btb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15H10m4 0h7.5m-19 5H10m4 0h7.5M10 13h4v9h-4Zm-.5-2.75c-1.25-1.25 1.25-2.75 0-4s1.25-2.5 0-3.75m5 7.75c-1.25-1.25 1.25-2.75 0-4s1.25-2.5 0-3.75");
}
</style><path class="ifurj9btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:steam-pipe"} {...others} />);
}

export default Component;
