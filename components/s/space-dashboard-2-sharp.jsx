import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwf_jbcay {
  fill: currentColor;
  d: path("M21 21V3zM3 21h10V3H3zm12 0h6v-8h-6zm0-10h6V3h-6z");
}
</style><path class="mwf_jbcay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:space-dashboard-2-sharp"} {...others} />);
}

export default Component;
