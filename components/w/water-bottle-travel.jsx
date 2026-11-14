import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gd1xnnbpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5h4V6c0 1 3 1.5 3 4v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9c0-2.5 3-3 3-4ZM7 14h10");
}
</style><path class="gd1xnnbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-bottle-travel"} {...others} />);
}

export default Component;
