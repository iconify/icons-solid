import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j9dhaqekf {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.288L19 9.5V20h-1V10l-6-4.538L6 10v10zm3.5-1.02h7v-3h-7zm0-4h7v-3h-7zm-1 5v-9h9v9z");
}
</style><path class="j9dhaqekf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:garage-home-outline"} {...others} />);
}

export default Component;
