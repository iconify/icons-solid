import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.bre0fw3to {
  fill: currentColor;
  d: path("M18 4a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zM3 4a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zm11.854 5.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L13.293 10H6.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L6.707 9h6.586l-1.147-1.146a.5.5 0 0 1 .708-.708z");
}
</style><path class="bre0fw3to"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:auto-fit-width-20-regular"} {...others} />);
}

export default Component;
