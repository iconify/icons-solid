import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mxe1ffbsi {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 3L18 3L22 15L2 15ZM10 3L8.6667 15M14 3L15.3333 15M4 9L20 9M12 15L12 21M7 21L17 21");
}
</style><path class="mxe1ffbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:solar-panel-sharp"} {...others} />);
}

export default Component;
