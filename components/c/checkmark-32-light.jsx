import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.zdhgclfwi {
  fill: currentColor;
  d: path("M29.854 5.146a.5.5 0 0 1 0 .708l-19 19a.5.5 0 0 1-.708 0l-8-8a.5.5 0 0 1 .708-.708l7.646 7.647L29.146 5.146a.5.5 0 0 1 .708 0");
}
</style><path class="zdhgclfwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:checkmark-32-light"} {...others} />);
}

export default Component;
