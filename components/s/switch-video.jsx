import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u6dzh-1fc {
  fill: currentColor;
  d: path("M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13zm-5 6V13H7v2.5L3.5 12L7 8.5V11h6V8.5l3.5 3.5z");
}
</style><path class="u6dzh-1fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:switch-video"} {...others} />);
}

export default Component;
