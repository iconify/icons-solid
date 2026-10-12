import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jjpp8p2cm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 16.79V10l-.66-2.41a2.25 2.25 0 1 1 .36-2.71L13 4.25l1.563-.032l-.313 1.532l-1 3v8.04a2.1 2.1 0 1 1-1.25 2.6a2.1 2.1 0 1 1-1.25-2.6Z");
}
</style><path class="jjpp8p2cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:femur-bone-sharp"} {...others} />);
}

export default Component;
