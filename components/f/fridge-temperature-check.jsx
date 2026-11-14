import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w4rad559h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h11v19H3ZM3 9h11M6 4.75v2m0 4.75v3m11.5-1v-8a1.5 1.5 0 0 1 3 0v8a2.75 2.75 0 1 1-3 0Z");
}
</style><path class="w4rad559h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fridge-temperature-check"} {...others} />);
}

export default Component;
