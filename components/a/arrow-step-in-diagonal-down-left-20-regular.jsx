import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.r7cau1brs {
  fill: currentColor;
  d: path("M16.854 3.146a.5.5 0 0 1 0 .708L9.707 11H14.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v4.793l7.146-7.147a.5.5 0 0 1 .708 0M7 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0");
}
</style><path class="r7cau1brs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-step-in-diagonal-down-left-20-regular"} {...others} />);
}

export default Component;
