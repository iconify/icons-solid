import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m5vi-zqvb {
  fill: currentColor;
  d: path("M3.5 19.962v-1h17v1zm0-14.923v-1h17v1zm0 4V7.5h1.539v1.539zm15.462 0V7.5H20.5v1.539zM3.5 16.5v-1.538h1.539V16.5zm15.462 0v-1.538H20.5V16.5zM8.5 16.5v-4h-5v-1h5v-4h7v4h5v1h-5v4z");
}
</style><path class="m5vi-zqvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:identity-aware-proxy-outline"} {...others} />);
}

export default Component;
