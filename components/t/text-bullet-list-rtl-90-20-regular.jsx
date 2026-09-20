import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.uaw14hnfr {
  fill: currentColor;
  d: path("M5.5 17a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1-3a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5m5 0a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5m4.5-.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm.5 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-4 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0");
}
</style><path class="uaw14hnfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-bullet-list-rtl-90-20-regular"} {...others} />);
}

export default Component;
