import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.xhblahbjw {
  fill: currentColor;
  d: path("M8 4.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM3 11.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V11H3zM4.5 3A1.5 1.5 0 0 0 3 4.5V10h10V4.5A1.5 1.5 0 0 0 11.5 3z");
}
</style><path class="xhblahbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:device-meeting-room-all-in-one-16-regular"} {...others} />);
}

export default Component;
