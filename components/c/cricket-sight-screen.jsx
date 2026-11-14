import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kd-aaob3a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.875 1.75H5.125q-3.375 0-3.375 3.375v6.75q0 3.375 3.375 3.375h.125v1.56q-2 .345-2 2.69q0 2.75 2.75 2.75t2.75-2.75q0-2.345-2-2.69v-1.56h10.5v1.56q-2 .345-2 2.69q0 2.75 2.75 2.75t2.75-2.75q0-2.345-2-2.69v-1.56h.125q3.375 0 3.375-3.375v-6.75q0-3.375-3.375-3.375");
}
</style><path class="kd-aaob3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:cricket-sight-screen"} {...others} />);
}

export default Component;
