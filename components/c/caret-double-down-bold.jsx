import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.clls34xqa {
  fill: currentColor;
  d: path("M216.49 127.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 1 1 17-17L128 199l71.51-71.52a12 12 0 0 1 16.98.03m-97 17a12 12 0 0 0 17 0l80-80a12 12 0 0 0-17-17L128 119L56.49 47.51a12 12 0 0 0-17 17Z");
}
</style><path class="clls34xqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-double-down-bold"} {...others} />);
}

export default Component;
