import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w0pukz8vh {
  fill: currentColor;
  d: path("M17 9V5h4v4zm0 5v-4h4v4zM3 19V5h13v14zm14 0v-4h4v4z");
}
</style><path class="w0pukz8vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-sidebar-sharp"} {...others} />);
}

export default Component;
