import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.b767a7rrt {
  fill: currentColor;
  d: path("M18 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h14zm-1-7a1 1 0 0 1 1 1v4H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm-1.75 2a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="b767a7rrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:xbox-one-console-20-filled"} {...others} />);
}

export default Component;
