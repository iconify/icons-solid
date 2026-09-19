import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pm1ckk35q {
  fill: currentColor;
  d: path("M18 7V2H6v5H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8z");
}
</style><path class="pm1ckk35q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-settings-input-hdmi"} {...others} />);
}

export default Component;
