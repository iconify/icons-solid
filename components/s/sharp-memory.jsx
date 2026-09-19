import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wijgwmafv {
  fill: currentColor;
  d: path("M15 9H9v6h6zm-2 4h-2v-2h2zm8-2V9h-2V5h-4V3h-2v2h-2V3H9v2H5v4H3v2h2v2H3v2h2v4h4v2h2v-2h2v2h2v-2h4v-4h2v-2h-2v-2zm-4 6H7V7h10z");
}
</style><path class="wijgwmafv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-memory"} {...others} />);
}

export default Component;
