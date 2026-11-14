import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pr9qvlb0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5Q6 7 17 3m0 0v8m0 0c2.75 1.5 3 5.5 0 8l2.5 2.5h-5L17 19c-3-2.5-2.75-6.5 0-8Z");
}
</style><path class="pr9qvlb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:genre-fishing-game"} {...others} />);
}

export default Component;
