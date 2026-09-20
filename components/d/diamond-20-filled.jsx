import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.u7iyexbeh {
  fill: currentColor;
  d: path("M7.877 1.879a3 3 0 0 1 4.242 0l6 5.999a3 3 0 0 1 0 4.242l-6 5.999a3 3 0 0 1-4.242 0L1.878 12.12a3 3 0 0 1 0-4.242z");
}
</style><path class="u7iyexbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:diamond-20-filled"} {...others} />);
}

export default Component;
