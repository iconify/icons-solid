import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ptr5jtake {
  fill: currentColor;
  d: path("M5.5 2a3.5 3.5 0 0 1 3.354 2.5H20a5 5 0 0 1 0 10H8a3.5 3.5 0 1 0 0 7h14.44l-2.22-2.22a.75.75 0 1 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06L22.44 23H8a5 5 0 0 1 0-10h12a3.5 3.5 0 1 0 0-7H8.964A3.5 3.5 0 1 1 5.5 2");
}
</style><path class="ptr5jtake"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flow-arrow-28-filled"} {...others} />);
}

export default Component;
