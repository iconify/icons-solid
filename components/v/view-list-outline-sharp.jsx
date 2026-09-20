import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w8trll-rj {
  fill: currentColor;
  d: path("M8.5 18H20v-3.175H8.5zM4 9.175h3.5V6H4zm0 4.675h3.5v-3.675H4zM4 18h3.5v-3.175H4zm4.5-4.15H20v-3.675H8.5zm0-4.675H20V6H8.5zM3 19V5h18v14z");
}
</style><path class="w8trll-rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-list-outline-sharp"} {...others} />);
}

export default Component;
