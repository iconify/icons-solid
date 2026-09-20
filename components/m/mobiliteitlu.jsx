import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cgilqac6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.338 34.98V13.178l3.419.04l9.27 11.708l8.122-11.872l2.169.018l-.047 22.01c-.07.07-20.546 6.824-20.546 6.824C14.421 43.714 8.68 41.305 8.68 35.9V7.125c0-.315.208-1.678 1.562-1.623c0 0 26.137 1.799 29.08 2.226");
}
</style><path class="cgilqac6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mobiliteitlu"} {...others} />);
}

export default Component;
