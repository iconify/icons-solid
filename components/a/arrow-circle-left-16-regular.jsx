import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.p89tr8rsx {
  fill: currentColor;
  d: path("m7.146 10.854l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l1.647 1.646a.5.5 0 0 1-.708.708M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m7 6A6 6 0 1 1 8 2a6 6 0 0 1 0 12");
}
</style><path class="p89tr8rsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-circle-left-16-regular"} {...others} />);
}

export default Component;
