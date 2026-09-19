import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vij-ywbne {
  fill: currentColor;
  d: path("M14 5V3h-3V1H5v2H2v19h12v-2h8V5zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z");
}
</style><path class="vij-ywbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-camera-roll"} {...others} />);
}

export default Component;
