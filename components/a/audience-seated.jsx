import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-ktqbcic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 13h4.5v7.5h-4.5Zm7.5 0h4.5v7.5h-4.5Zm7.5 0h4.5v7.5h-4.5Zm-15-2.75v-4.5a2.25 2.25 0 0 1 4.5 0v4.5m3 0v-4.5a2.25 2.25 0 0 1 4.5 0v4.5m3 0v-4.5a2.25 2.25 0 0 1 4.5 0v4.5");
}
</style><path class="b-ktqbcic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:audience-seated"} {...others} />);
}

export default Component;
