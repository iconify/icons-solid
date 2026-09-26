import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.na3vw322g {
  fill: currentColor;
  d: path("M14.25 2a.75.75 0 1 1 0 1.5h-1.5v17h1.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.5v-17h-1.5a.75.75 0 0 1 0-1.5zm-4 17h-5A3.25 3.25 0 0 1 2 15.75v-7.5A3.25 3.25 0 0 1 5.25 5h5zm8.5-14A3.25 3.25 0 0 1 22 8.25v7.5A3.25 3.25 0 0 1 18.75 19h-5V5z");
}
</style><path class="na3vw322g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:rename-24-filled"} {...others} />);
}

export default Component;
