import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.cvhg2fe3c {
  fill: currentColor;
  d: path("M11 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-4.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M3.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m7.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 12a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-6-1.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0");
}
</style><path class="cvhg2fe3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:re-order-dots-horizontal-16-filled"} {...others} />);
}

export default Component;
