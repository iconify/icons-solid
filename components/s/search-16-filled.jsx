import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.w8puptbco {
  fill: currentColor;
  d: path("M10.823 11.883a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06zM11.5 7.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0");
}
</style><path class="w8puptbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:search-16-filled"} {...others} />);
}

export default Component;
