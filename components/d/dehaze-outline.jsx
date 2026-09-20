import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v2ttsid9z {
  fill: currentColor;
  d: path("M4 7V6h16v1zm0 11v-1h16v1zm0-5.5v-1h16v1z");
}
</style><path class="v2ttsid9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dehaze-outline"} {...others} />);
}

export default Component;
