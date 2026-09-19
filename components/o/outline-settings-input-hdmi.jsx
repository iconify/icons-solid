import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q8-yo_fog {
  fill: currentColor;
  d: path("M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8zm9 8.53l-3 6V20h-4v-1.47l-3-6V9h10z");
}
</style><path class="q8-yo_fog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-settings-input-hdmi"} {...others} />);
}

export default Component;
