import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.vxq6bdcxu {
  fill: currentColor;
  d: path("M13 5a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zM7 15a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zm4-7a2 2 0 0 1-2 2H3a2 2 0 1 1 0-4h6a2 2 0 0 1 2 2");
}
</style><path class="vxq6bdcxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-bar-horizontal-descending-16-filled"} {...others} />);
}

export default Component;
