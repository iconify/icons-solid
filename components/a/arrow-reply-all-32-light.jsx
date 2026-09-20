import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.yqbtsd9ok {
  fill: currentColor;
  d: path("M10.854 6.146a.5.5 0 0 1 0 .708L4.207 13.5l6.647 6.646a.5.5 0 0 1-.708.708l-7-7a.5.5 0 0 1 0-.708l7-7a.5.5 0 0 1 .708 0m6 0a.5.5 0 0 1 0 .708L10.707 13H16.5C23.404 13 29 18.596 29 25.5a.5.5 0 0 1-1 0C28 19.149 22.851 14 16.5 14h-5.793l6.147 6.146a.5.5 0 0 1-.708.708l-7-7a.5.5 0 0 1 0-.708l7-7a.5.5 0 0 1 .708 0");
}
</style><path class="yqbtsd9ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-reply-all-32-light"} {...others} />);
}

export default Component;
