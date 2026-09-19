import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sjmp4j3xv {
  fill: currentColor;
  d: path("M10.5 7.67V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l8.5 5v2l-4.49-1.32zm9.28 14.94l1.41-1.41l-7.69-7.7l-3.94-3.94l-6.75-6.75l-1.42 1.41l6.38 6.38L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-2.67z");
}
</style><path class="sjmp4j3xv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-airplanemode-inactive"} {...others} />);
}

export default Component;
