import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vu3r4ioix {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 1V23M8.257 12L2 16.22V7.78L8.257 12ZM15.743 12L22 16.22V7.78L15.743 12Z");
}
</style><path class="vu3r4ioix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:triangles-centerline-inward-vertical-sharp"} {...others} />);
}

export default Component;
