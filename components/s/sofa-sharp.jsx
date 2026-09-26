import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ecrhn3b6u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 18L2 8L8 8L8 14L16 14L16 8L22 8L22 18L2 18ZM5 8L5 4L19 4L19 8M5 18L5 21M19 18L19 21");
}
</style><path class="ecrhn3b6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sofa-sharp"} {...others} />);
}

export default Component;
