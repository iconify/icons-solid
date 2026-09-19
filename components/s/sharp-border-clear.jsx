import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ezidasblo {
  fill: currentColor;
  d: path("M7 5h2V3H7zm0 8h2v-2H7zm0 8h2v-2H7zm4-4h2v-2h-2zm0 4h2v-2h-2zm-8 0h2v-2H3zm0-4h2v-2H3zm0-4h2v-2H3zm0-4h2V7H3zm0-4h2V3H3zm8 8h2v-2h-2zm8 4h2v-2h-2zm0-4h2v-2h-2zm0 8h2v-2h-2zm0-12h2V7h-2zm-8 0h2V7h-2zm8-6v2h2V3zm-8 2h2V3h-2zm4 16h2v-2h-2zm0-8h2v-2h-2zm0-8h2V3h-2z");
}
</style><path class="ezidasblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-border-clear"} {...others} />);
}

export default Component;
