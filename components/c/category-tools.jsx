import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nlv0vzbwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 4.5A4.5 4.5 0 0 0 10 10l-6.5 6.5a2 2 0 0 0 4 4L14 14a4.5 4.5 0 0 0 5.5-4.5l-3 3l-4-4Z");
}
</style><path class="nlv0vzbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-tools"} {...others} />);
}

export default Component;
