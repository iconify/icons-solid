import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d9xqdltwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.273 11.506l9.965 19.734c3.271 6.478 1.466 11.26-6.086 11.26H7.275zm19.454 24.988L23.762 16.76C20.49 10.282 22.296 5.5 29.848 5.5h10.877z");
}
</style><path class="d9xqdltwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:uba-mobile"} {...others} />);
}

export default Component;
