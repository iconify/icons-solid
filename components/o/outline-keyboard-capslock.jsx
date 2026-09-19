import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d85607bpn {
  fill: currentColor;
  d: path("M12 8.41L16.59 13L18 11.59l-6-6l-6 6L7.41 13zM6 18h12v-2H6z");
}
</style><path class="d85607bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-keyboard-capslock"} {...others} />);
}

export default Component;
