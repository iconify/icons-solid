import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cbvah06vk {
  fill: currentColor;
  d: path("M22 19.75V4.25zm-20-11v-4.5h4.25v4.5zm5.25 0v-4.5h4.25v4.5zm5.25 0v-4.5h4.25v4.5zm5.25 0v-4.5H22v4.5zm0 5.5v-4.5H22v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm15.75 5.5v-4.5H22v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5zm-5.25 0v-4.5h4.25v4.5z");
}
</style><path class="cbvah06vk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-compact-rounded"} {...others} />);
}

export default Component;
