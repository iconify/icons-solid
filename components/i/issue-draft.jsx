import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.htqcw6bpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.563 3.137a9 9 0 0 1 4.222 1.969m2.672 3.816a9 9 0 0 1 .406 4.641m-1.969 4.222a9 9 0 0 1-3.816 2.672m-4.641.406a9 9 0 0 1-4.222-1.969m-2.672-3.816a9 9 0 0 1-.406-4.641m1.969-4.222a9 9 0 0 1 3.816-2.672M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><path class="htqcw6bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:issue-draft"} {...others} />);
}

export default Component;
