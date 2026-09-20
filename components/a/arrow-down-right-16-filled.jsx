import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.vbadqictn {
  fill: currentColor;
  d: path("M7 13.25c0 .414.335.75.75.75h5.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-1.5 0v3.69L3.28 2.22a.75.75 0 1 0-1.06 1.06l9.22 9.22H7.75a.75.75 0 0 0-.75.75");
}
</style><path class="vbadqictn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-right-16-filled"} {...others} />);
}

export default Component;
