import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sl009tz-t {
  fill: currentColor;
  d: path("M12.5 19v-1h7v1zm-6.77-4l-.707-.688L9.329 10L5.023 5.689L5.731 5l5 5z");
}
</style><path class="sl009tz-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:terminal-2"} {...others} />);
}

export default Component;
