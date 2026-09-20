import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.pt2fwlb8s {
  fill: currentColor;
  d: path("M8 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-3 4a3 3 0 1 1 6 0a3 3 0 0 1-6 0M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v1a1.5 1.5 0 0 1-1 1.415V11a7 7 0 1 1-14 0V6.915A1.5 1.5 0 0 1 2 5.5zM4 7v4a6 6 0 1 0 12 0V7zm-.5-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z");
}
</style><path class="pt2fwlb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:camera-dome-20-regular"} {...others} />);
}

export default Component;
