import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjwq8w8zs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20L2 20L2 4L4 4M8.6569 4L22 4L22 17.3431M6 6L6 13L10 13L10 10M8 13L8 20M14 4L14 9.3431M18 4L18 13L17.6569 13M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="hjwq8w8zs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:piano-off-sharp"} {...others} />);
}

export default Component;
