import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_y8p2bjr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.5 7.25h-.75V4.5q0-1.75-1.75-1.75H8q-1.75 0-1.75 1.75v2.75H5.5q-1.139 0-1.945.805Q2.75 8.861 2.75 10v5q0 2.75 2.75 2.75h.75v1q0 2.5 2.5 2.5h6.5q2.5 0 2.5-2.5v-1h.75q2.75 0 2.75-2.75v-5q0-2.75-2.75-2.75M7.75 4.5v2.75h8.5V4.5q0-.25-.25-.25H8q-.25 0-.25.25");
}
</style><path class="g_y8p2bjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:pin-print"} {...others} />);
}

export default Component;
