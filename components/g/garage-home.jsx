import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sl9y0kb5t {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.288L19 9.5V20h-2.5v-9.02h-9V20zm3.5-1.02h7v-3h-7zm0-4h7v-3h-7z");
}
</style><path class="sl9y0kb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:garage-home"} {...others} />);
}

export default Component;
