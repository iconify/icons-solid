import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.yajwepijo {
  fill: currentColor;
  d: path("M13.617 2.076a1 1 0 0 1 1.09.217l6 6a1 1 0 0 1-.067 1.475L15.562 14l5.078 4.232a1 1 0 0 1 .067 1.475l-6 6A1 1 0 0 1 13 25v-8.865l-4.36 3.633a1 1 0 1 1-1.28-1.536L12.438 14L7.36 9.768a1 1 0 1 1 1.28-1.536L13 11.865V3a1 1 0 0 1 .617-.924M15 16.135v6.45l3.519-3.518zm0-4.27l3.519-2.932L15 5.414z");
}
</style><path class="yajwepijo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:bluetooth-28-filled"} {...others} />);
}

export default Component;
