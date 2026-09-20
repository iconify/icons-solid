import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.duccqwbgo {
  fill: currentColor;
  d: path("M14 8a5.98 5.98 0 0 1-1.427 3.884L9.053 8.42a1.5 1.5 0 0 0-2.105 0l-3.521 3.465A6 6 0 1 1 14 8M8.35 9.131l3.515 3.459A5.98 5.98 0 0 1 8 14c-1.472 0-2.82-.53-3.865-1.41L7.65 9.13a.5.5 0 0 1 .702 0M10 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="duccqwbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:image-circle-16-filled"} {...others} />);
}

export default Component;
