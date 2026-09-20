import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.agmoftj-g {
  fill: currentColor;
  d: path("M6.527 6.442A2.75 2.75 0 0 1 8.947 5h10.111a2.75 2.75 0 0 1 2.42 1.442l3.463 6.408a4.2 4.2 0 0 0-1.691-.35H4.75c-.599 0-1.168.124-1.685.347zM23.25 23A2.75 2.75 0 0 0 26 20.25v-3.5A2.75 2.75 0 0 0 23.25 14H4.75A2.75 2.75 0 0 0 2 16.75v3.5A2.75 2.75 0 0 0 4.75 23zm-3-4.5a1.25 1.25 0 0 1 1.238-1.25h.024a1.25 1.25 0 1 1-1.262 1.25");
}
</style><path class="agmoftj-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hard-drive-28-filled"} {...others} />);
}

export default Component;
