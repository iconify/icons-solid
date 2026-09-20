import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.vpsno5uoq {
  fill: currentColor;
  d: path("M13.5 3a.5.5 0 0 1 .5.5A5.5 5.5 0 0 1 8.5 9H3.707l2.647 2.646a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 1 1 .708.708L3.707 8H8.5A4.5 4.5 0 0 0 13 3.5a.5.5 0 0 1 .5-.5");
}
</style><path class="vpsno5uoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-reply-down-16-regular"} {...others} />);
}

export default Component;
