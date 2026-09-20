import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.hyf0fsbuy {
  fill: currentColor;
  d: path("M16.75 29a1.25 1.25 0 1 0 0-2.5H7.268L28.634 5.134a1.25 1.25 0 0 0-1.768-1.768L5.5 24.732V15.25a1.25 1.25 0 0 0-2.5 0v12.5c0 .69.56 1.25 1.25 1.25z");
}
</style><path class="hyf0fsbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-left-32-filled"} {...others} />);
}

export default Component;
