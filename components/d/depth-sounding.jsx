import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ev9cdtbwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10l-2 3.5H9m-6.5 0h19M9 10a4 4 0 0 0 6 0m-9 3.5a8 8 0 0 0 12 0m-15.5 7l4.5-1l5 1l4.5-1.5l5 1");
}
</style><path class="ev9cdtbwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:depth-sounding"} {...others} />);
}

export default Component;
