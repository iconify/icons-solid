import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-52rbc0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5L12 3l9 4.5Zm1.5 0V17m15-9.5V17m-17 0h19v4.5h-19ZM10 7.5l-2.5 6.25M14 7.5l2.5 6.25");
}
</style><path class="i-52rbc0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:festival-stage"} {...others} />);
}

export default Component;
