import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ig8mz2j0v {
  fill: currentColor;
  d: path("M8.75 2a.75.75 0 0 0 0 1.5H9V5h-.75A3.25 3.25 0 0 0 5 8.25v9a3.25 3.25 0 0 0 2 3v1a.75.75 0 0 0 1.5 0v-.75h7v.75a.75.75 0 0 0 1.5 0v-1a3.25 3.25 0 0 0 2-3v-9A3.25 3.25 0 0 0 15.75 5H15V3.5h.25a.75.75 0 0 0 0-1.5zm4.75 1.5V5h-3V3.5zM8 9.75A.75.75 0 0 1 8.75 9h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 9.75");
}
</style><path class="ig8mz2j0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:luggage-24-filled"} {...others} />);
}

export default Component;
