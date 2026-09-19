import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ffiu-bb_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.054 36.446H16.946a12.446 12.446 0 0 1 0-24.892h14.108a12.446 12.446 0 1 1 0 24.892m-14.108-16.46a4.013 4.013 0 1 0 0 8.027h14.108a4.013 4.013 0 1 0 0-8.026Z");
}
</style><path class="ffiu-bb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:oculus"} {...others} />);
}

export default Component;
