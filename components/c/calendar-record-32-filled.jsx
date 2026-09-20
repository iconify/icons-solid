import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.x2vk-kxbw {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5V9h26V7.5A4.5 4.5 0 0 0 24.5 3zM29 11H3v13.5A4.5 4.5 0 0 0 7.5 29h8.875A9 9 0 0 1 29 16.375zm-5.5 7a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 13a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m3.5-7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0");
}
</style><path class="x2vk-kxbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-record-32-filled"} {...others} />);
}

export default Component;
