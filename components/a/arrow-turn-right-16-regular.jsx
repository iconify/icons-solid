import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.zyj6afbto {
  fill: currentColor;
  d: path("M8.646 1.646a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 1 1-.708-.708L11.293 6H5.5A1.5 1.5 0 0 0 4 7.5v6a.5.5 0 0 1-1 0v-6A2.5 2.5 0 0 1 5.5 5h5.793L8.646 2.354a.5.5 0 0 1 0-.708");
}
</style><path class="zyj6afbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-turn-right-16-regular"} {...others} />);
}

export default Component;
