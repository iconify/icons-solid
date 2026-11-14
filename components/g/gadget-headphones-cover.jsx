import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2k4pubtq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12v-.5a7 7 0 0 1 14 0v.5M3 12h5v6.5H3Zm13 0h5v6.5h-5Zm-4 .5l2.5 1v1.75c0 1.45-1.1 2.25-2.5 2.75c-1.4-.5-2.5-1.3-2.5-2.75V13.5Z");
}
</style><path class="h2k4pubtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gadget-headphones-cover"} {...others} />);
}

export default Component;
