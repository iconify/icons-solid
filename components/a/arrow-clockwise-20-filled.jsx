import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.u74ajogqn {
  fill: currentColor;
  d: path("M4 10a6 6 0 0 1 9.969-4.5H12.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.16a7.5 7.5 0 1 0 2.495 5.313a.75.75 0 0 0-1.5.054q.006.11.005.223a6 6 0 0 1-12 0");
}
</style><path class="u74ajogqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-clockwise-20-filled"} {...others} />);
}

export default Component;
