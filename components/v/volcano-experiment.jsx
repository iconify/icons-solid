import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i8vf_kb4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l6-10h6l6 10Zm7.5-10c0-3 1.5-3 1.5-5.5C12 8 13.5 8 13.5 11M5 3.5l1.5 2m12.5-2l-1.5 2");
}
</style><path class="i8vf_kb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:volcano-experiment"} {...others} />);
}

export default Component;
