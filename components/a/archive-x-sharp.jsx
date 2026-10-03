import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h9x64hb0a {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 9L2 9L2 4ZM4 9L4 20L20 20L20 9M10.2071 12.7071L13.7929 16.2929M13.7929 12.7071L10.2071 16.2929");
}
</style><path class="h9x64hb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:archive-x-sharp"} {...others} />);
}

export default Component;
