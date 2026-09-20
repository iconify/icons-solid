import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hs5k8_ggt {
  fill: currentColor;
  d: path("M3 16V3h18v2.05l-7.5 8.425l-4-4zm0 5v-2l6.5-6.525l4 4L21 8.05V21z");
}
</style><path class="hs5k8_ggt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sound-detection-glass-break"} {...others} />);
}

export default Component;
