import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zupl36b5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9.5H12v5H7.5ZM12 12h9.5M17 7.5l4.5 4.5l-4.5 4.5M7.5 12h-5m2.25-2.25L2.5 12l2.25 2.25");
}
</style><path class="zupl36b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:unbalanced-forces"} {...others} />);
}

export default Component;
