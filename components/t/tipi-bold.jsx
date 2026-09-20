import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fnbm4334b {
  fill: currentColor;
  d: path("m242.11 209.53l-99.86-156l19.86-31a12 12 0 1 0-20.22-13L128 31.24L114.11 9.53a12 12 0 0 0-20.22 12.94l19.86 31l-99.86 156A12 12 0 0 0 24 228h208a12 12 0 0 0 10.11-18.47M96.17 204L128 154.26L159.83 204Zm92.16 0l-50.22-78.47a12 12 0 0 0-20.22 0L67.67 204H45.93L128 75.76L210.07 204Z");
}
</style><path class="fnbm4334b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tipi-bold"} {...others} />);
}

export default Component;
