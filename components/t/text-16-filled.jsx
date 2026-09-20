import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.atzfbjl7h {
  fill: currentColor;
  d: path("M2.5 2.75A.75.75 0 0 1 3.25 2h9a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3.5h-3v9h1.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5H7v-9H4v.75a.75.75 0 0 1-1.5 0z");
}
</style><path class="atzfbjl7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-16-filled"} {...others} />);
}

export default Component;
