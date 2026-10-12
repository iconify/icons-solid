import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.euiyvkbdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 4.5c-.5-.75-1.25-1.25-2.25-1.25c-1.75 0-2.75 1.25-3 3l-1.5 11.5c-.25 1.75-1.25 3-3 3c-1 0-1.75-.5-2.25-1.25");
}
</style><path class="euiyvkbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:contour-integral"} {...others} />);
}

export default Component;
