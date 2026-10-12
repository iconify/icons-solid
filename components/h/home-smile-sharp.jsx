import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hs8z7mbmc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 10L12 2.9963L3 10L3 21L21 21ZM9 9.5L9 12.5M15 9.5L15 12.5M8.7071 15.2071L9 15.5C10 16.5 11 17 12 17C13 17 14 16.5 15 15.5L15.2929 15.2071");
}
</style><path class="hs8z7mbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:home-smile-sharp"} {...others} />);
}

export default Component;
