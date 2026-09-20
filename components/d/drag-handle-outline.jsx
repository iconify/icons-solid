import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y8jm_xmse {
  fill: currentColor;
  d: path("M5 14.5v-1h14v1zm0-4v-1h14v1z");
}
</style><path class="y8jm_xmse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:drag-handle-outline"} {...others} />);
}

export default Component;
