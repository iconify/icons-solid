import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tt-pcbbbv {
  fill: currentColor;
  d: path("M17 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1h14zM14 3a3 3 0 0 1 3 3v6H3V6a3 3 0 0 1 3-3zm-4 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="tt-pcbbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:device-meeting-room-all-in-one-20-filled"} {...others} />);
}

export default Component;
