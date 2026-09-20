import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.zg7micc9s {
  fill: currentColor;
  d: path("M5 1a3 3 0 0 0 0 6h6a3 3 0 1 0 0-6zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5 8a3 3 0 0 0 0 6h6a3 3 0 1 0 0-6zm6 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="zg7micc9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-multiple-16-filled"} {...others} />);
}

export default Component;
