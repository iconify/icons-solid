import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.dtzxwi1sk {
  fill: currentColor;
  d: path("M24.707 3.293a1 1 0 0 1 0 1.414L6.414 23H15a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V13a1 1 0 1 1 2 0v8.586L23.293 3.293a1 1 0 0 1 1.414 0");
}
</style><path class="dtzxwi1sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-left-28-filled"} {...others} />);
}

export default Component;
