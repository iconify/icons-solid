import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.hyzcm7ixf {
  fill: currentColor;
  d: path("M10.78 1.22a.75.75 0 0 1 0 1.06L3.56 9.5h3.69a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v3.69l7.22-7.22a.75.75 0 0 1 1.06 0");
}
</style><path class="hyzcm7ixf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-left-12-filled"} {...others} />);
}

export default Component;
