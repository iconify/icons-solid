import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.lmt7i0bvj {
  fill: currentColor;
  d: path("M6 16.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0M4.75 13a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-.75.75M9 12.25a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-1.5 0zm5 0a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-1.5 0zM9.75 15.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M16 16.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0");
}
</style><path class="lmt7i0bvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-bullet-list-90-20-filled"} {...others} />);
}

export default Component;
