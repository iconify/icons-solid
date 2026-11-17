import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oh7ycf8sf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3.237 7.207l15.455-4.141l2.07 7.727l-15.454 4.141ZM12 13.14V17h7m0-1v5M15.605 6.999l.518 1.932");
}
</style><path class="oh7ycf8sf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:security-camera-sharp"} {...others} />);
}

export default Component;
