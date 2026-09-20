import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mgrsv_brb {
  fill: currentColor;
  d: path("M12.25 6A6.25 6.25 0 0 0 6 12.25v4.25h10.5V6zM19 6v10.5h10V6zm-2.5 13H6v10h10.5zM19 29V19h10v10zm-2.5 2.5H6v4.25A6.25 6.25 0 0 0 12.25 42h4.25zM19 42h10V31.5H19zm12.5 0V31.5H42v4.25A6.25 6.25 0 0 1 35.75 42zM42 19v10H31.5V19zm0-2.5v-4.25A6.25 6.25 0 0 0 35.75 6H31.5v10.5z");
}
</style><path class="mgrsv_brb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-48-filled"} {...others} />);
}

export default Component;
