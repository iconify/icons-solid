import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.h3laydbah {
  fill: currentColor;
  d: path("M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0-5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="h3laydbah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-circle-16-filled"} {...others} />);
}

export default Component;
