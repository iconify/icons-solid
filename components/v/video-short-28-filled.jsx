import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.coegjzc6x {
  fill: currentColor;
  d: path("M20.25 2A3.75 3.75 0 0 1 24 5.75v16.5A3.75 3.75 0 0 1 20.25 26H7.75A3.75 3.75 0 0 1 4 22.25V5.75A3.75 3.75 0 0 1 7.75 2zm-6.955 8.23A1.5 1.5 0 0 0 11 11.5v4.998a1.5 1.5 0 0 0 2.295 1.273l4-2.5a1.5 1.5 0 0 0 0-2.545z");
}
</style><path class="coegjzc6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:video-short-28-filled"} {...others} />);
}

export default Component;
