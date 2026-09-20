import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.dtj68kfst {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3zM17 7H7v10h7.5a2.5 2.5 0 0 0 2.5-2.5zM6 17V7H3v7.5A2.5 2.5 0 0 0 5.5 17z");
}
</style><path class="dtj68kfst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:window-column-one-fourth-left-20-filled"} {...others} />);
}

export default Component;
