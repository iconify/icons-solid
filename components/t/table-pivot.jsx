import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s187s9b2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 8H20V5C20 3.34315 18.65685 2 17 2H5C3.34315 2 2 3.34315 2 5V17C2 18.65685 3.34315 20 5 20H8V8M20 12V17C20 18.65685 18.65685 20 17 20H12M18 14L20 12L22 14M14 18L12 20L14 22");
}
</style><path class="s187s9b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-pivot"} {...others} />);
}

export default Component;
