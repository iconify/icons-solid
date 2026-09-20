import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mslpx_7ni {
  fill: currentColor;
  d: path("M6.5 2A2.5 2.5 0 0 0 4 4.5v1A2.5 2.5 0 0 0 6.5 8h11A2.5 2.5 0 0 0 20 5.5v-1A2.5 2.5 0 0 0 17.5 2zm0 7A2.5 2.5 0 0 0 4 11.5v1A2.5 2.5 0 0 0 6.5 15h11a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 17.5 9zm0 7A2.5 2.5 0 0 0 4 18.5v1A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5z");
}
</style><path class="mslpx_7ni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-space-evenly-vertical-24-filled"} {...others} />);
}

export default Component;
