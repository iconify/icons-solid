import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.n-g9wabum {
  fill: currentColor;
  d: path("M14 9.005v1.727A2 2 0 0 0 15 9V6a4 4 0 0 0-4-4H5a2 2 0 0 0-1.732 1H11a3 3 0 0 1 3 3zM3 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2v.998a1 1 0 0 0 1.588.809L7.073 13H11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM2 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6.747L4 13.998V12H3a1 1 0 0 1-1-1z");
}
</style><path class="n-g9wabum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:comment-multiple-16-regular"} {...others} />);
}

export default Component;
