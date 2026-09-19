import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jio770bgp {
  fill: currentColor;
  d: path("M23 2H1v16h9v2H8v2h8v-2h-2v-2h9zm-2 14H3V4h18z");
}
</style><path class="jio770bgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-desktop-windows"} {...others} />);
}

export default Component;
