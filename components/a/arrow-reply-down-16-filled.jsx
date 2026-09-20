import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.t3mqgsi6l {
  fill: currentColor;
  d: path("m4.56 8l2.22-2.22a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.06-1.06L4.56 9.5h3.69A5.75 5.75 0 0 0 14 3.75a.75.75 0 0 0-1.5 0A4.25 4.25 0 0 1 8.25 8z");
}
</style><path class="t3mqgsi6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-reply-down-16-filled"} {...others} />);
}

export default Component;
