import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.i92fxpbnx {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-6 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0-2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0-2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="i92fxpbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-agenda-16-filled"} {...others} />);
}

export default Component;
