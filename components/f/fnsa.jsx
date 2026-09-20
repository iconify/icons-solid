import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.up2-qvb9j {
  d: path("M18.75 5.25h-6.587c-3.881 0-6.913 2.959-6.913 6.778V21H3v-8.972C3 7.038 7.106 3 12.163 3H21v8.972C21 16.962 16.894 21 11.837 21h-4.9v-9.377a5.636 5.636 0 0 1 5.547-4.686H16.5v2.25h-3.752c-1.693 0-2.891.704-3.375 2.25H16.5v2.25H9.187v5.063h2.65c3.881 0 6.913-2.959 6.913-6.778z");
}
</style><path class="up2-qvb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:fnsa"} {...others} />);
}

export default Component;
