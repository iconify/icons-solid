import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hng2hsm0v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 6q0-3 3-3t3 3t-3 3t-3-3m18 3q0-3-3-3t-3 3t3 3t3-3M10 21q-3 0-3-3t3-3t3 3t-3 3");
}
</style><path class="hng2hsm0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:gnat"} {...others} />);
}

export default Component;
