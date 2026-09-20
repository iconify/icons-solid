import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.qnqaqr6se {
  fill: currentColor;
  d: path("M10.854 6.854a.5.5 0 0 0-.708-.708l-7 7a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708L4.707 14H16.5C22.851 14 28 19.149 28 25.5a.5.5 0 0 0 1 0C29 18.596 23.404 13 16.5 13H4.707z");
}
</style><path class="qnqaqr6se"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-reply-32-light"} {...others} />);
}

export default Component;
