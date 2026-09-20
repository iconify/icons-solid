import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iyecw4bpx {
  fill: currentColor;
  d: path("M3 10V3h7v7zm1-1h5V4H4zM3 21v-7h7v7zm1-1h5v-5H4zm10-10V3h7v7zm1-1h5V4h-5zm-1 12v-7h7v7zm1-1h5v-5h-5zm0-5");
}
</style><path class="iyecw4bpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-comfy-alt-outline"} {...others} />);
}

export default Component;
