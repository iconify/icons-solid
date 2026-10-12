import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yad1xibkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 14.5C5.5 9.5 8.25 5 10 6c2 1.25-4.25 10.25-2 11.5s6-9.5 8.25-8.25c2 1.1-2.25 7.25-.5 8c1.25.5 3-1.25 4.5-3.25");
}
</style><path class="yad1xibkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:scribble-sharp"} {...others} />);
}

export default Component;
