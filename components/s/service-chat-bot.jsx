import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oh0t8zbhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 7.5h3.5A5.25 5.25 0 0 1 19 12.75v1.5a5.25 5.25 0 0 1-5.25 5.25h-3.5A5.25 5.25 0 0 1 5 14.25v-1.5a5.25 5.25 0 0 1 5.25-5.25M12 3v4.5M9.5 13h.01m4.99 0h.01M10 17h4");
}
</style><path class="oh0t8zbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:service-chat-bot"} {...others} />);
}

export default Component;
