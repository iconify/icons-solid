import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ol0qizktf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L2 20M2 10L19 10C20.6569 10 22 11.3431 22 13L22 16L2 16ZM6 10L6 7C6 5.8954 6.8954 5 8 5L10 5C11.1046 5 12 5.8954 12 7L12 10M22 16L22 20");
}
</style><path class="ol0qizktf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bed"} {...others} />);
}

export default Component;
