import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.qbtz0bcpl {
  fill: currentColor;
  d: path("M10 8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM8 2a2 2 0 0 1 2 2v3H2V4a2 2 0 0 1 2-2zM6 4a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1");
}
</style><path class="qbtz0bcpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:device-meeting-room-all-in-one-12-filled"} {...others} />);
}

export default Component;
