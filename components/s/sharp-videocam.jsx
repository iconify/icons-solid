import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efk3_mi9r {
  fill: currentColor;
  d: path("M17 10.5V6H3v12h14v-4.5l4 4v-11z");
}
</style><path class="efk3_mi9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-videocam"} {...others} />);
}

export default Component;
