import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mvc0pi9ca {
  fill: currentColor;
  d: path("M15 21h2v-2h-2zm4-12h2V7h-2zM3 3v18h6v-2H5V5h4V3zm16 0v2h2V3zm-8 20h2V1h-2zm8-6h2v-2h-2zM15 5h2V3h-2zm4 8h2v-2h-2zm0 8h2v-2h-2z");
}
</style><path class="mvc0pi9ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-flip"} {...others} />);
}

export default Component;
