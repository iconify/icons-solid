import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7p9_2buv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12c1.5-9.5 4.5-9.5 6 0s4.5 9.5 6 0M4.5 5v7M2.75 6.75L4.5 5l1.75 1.75m-3.5 3.5L4.5 12l1.75-1.75");
}
</style><path class="a7p9_2buv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:amplitude"} {...others} />);
}

export default Component;
