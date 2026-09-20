import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tsyhz203b {
  fill: currentColor;
  d: path("M5 3.5a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 3.5m0 12a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 15.5m6.75-8.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM11 11.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m-2-2a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-6 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5");
}
</style><path class="tsyhz203b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-collapse-20-filled"} {...others} />);
}

export default Component;
