import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u_hxwsbht {
  fill: currentColor;
  d: path("m6 2l.01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4l4-3.99V2zm10 14.5V20H8v-3.5l4-4z");
}
</style><path class="u_hxwsbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-hourglass-top"} {...others} />);
}

export default Component;
