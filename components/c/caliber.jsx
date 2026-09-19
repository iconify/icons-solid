import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lv4-2mjcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.94 26.237v4.624l-8.013 4.626l-8.525-4.922v-13.87l8.31-4.798l7.785 4.494v4.722L40.5 18.7v-6.48L23.91 2.642L7.124 12.335v23.398l16.67 9.624l17.082-9.862V23.3M23.74 18.949v9.975");
}
</style><path class="lv4-2mjcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:caliber"} {...others} />);
}

export default Component;
