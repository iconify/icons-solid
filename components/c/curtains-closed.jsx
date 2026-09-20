import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rma9l8b8a {
  fill: currentColor;
  d: path("M3 20v-1h2V4h14v15h2v1zm7.75-1h2.5V5h-2.5z");
}
</style><path class="rma9l8b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:curtains-closed"} {...others} />);
}

export default Component;
