import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5ltb1bxy {
  fill: currentColor;
  d: path("M4 20v-4.75h6.616V20zm9.366 0v-4.75H20V20zM4 12.5V4h16v8.5z");
}
</style><path class="d5ltb1bxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tile-large-sharp"} {...others} />);
}

export default Component;
