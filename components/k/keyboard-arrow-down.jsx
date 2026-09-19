import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f21ig-h_x {
  fill: currentColor;
  d: path("M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z");
}
</style><path class="f21ig-h_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:keyboard-arrow-down"} {...others} />);
}

export default Component;
