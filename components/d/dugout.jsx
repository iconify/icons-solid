import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aucqoyt9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 8l3-5h13l3 5ZM5 21v-4.5h14V21M6 12h4c2 0 4-1.25 7-1.25a1.25 1.25 0 0 1 0 2.5c-3 0-5-1.25-7-1.25");
}
</style><path class="aucqoyt9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dugout"} {...others} />);
}

export default Component;
