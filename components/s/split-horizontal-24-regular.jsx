import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pa8yyebhz {
  fill: currentColor;
  d: path("M21.25 12.5a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0 0 1.5zM20 4.25A2.25 2.25 0 0 0 17.75 2H6.25A2.25 2.25 0 0 0 4 4.25V10h1.5V4.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75V10H20zm-14.5 15V13.5H4v5.75a2.25 2.25 0 0 0 2.25 2.25h11.5A2.25 2.25 0 0 0 20 19.25V13.5h-1.5v5.75a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75");
}
</style><path class="pa8yyebhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-horizontal-24-regular"} {...others} />);
}

export default Component;
