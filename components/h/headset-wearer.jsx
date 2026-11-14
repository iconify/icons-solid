import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hj48c18cl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5.75a5 5 0 0 1 8 0m-12 0h16v6H4Zm4 6a5 5 0 0 0 8 0M4.5 21c0-2.5 3.25-4 7.5-4s7.5 1.5 7.5 4");
}
</style><path class="hj48c18cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:headset-wearer"} {...others} />);
}

export default Component;
