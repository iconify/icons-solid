import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2x22l5ti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11c0-5 1-8 4.5-8c2 0 2.5 1.5 4 1.5S14 3 16 3c3.5 0 4.5 3 4.5 8ZM6 11l1 8.5c.25 1.5 2 1.5 2.25 0l1-4.5c.25-1 3.25-1 3.5 0l1 4.5c.25 1.5 2 1.5 2.25 0l1-8.5");
}
</style><path class="h2x22l5ti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dental-crown"} {...others} />);
}

export default Component;
