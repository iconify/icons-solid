import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epw_amy-n {
  fill: currentColor;
  d: path("M7.77 19v-1.115H4V12.5H2v-1h2V6.116h3.77V5h1v14zm7.46 0v-3.712h-3.75v-1h3.75V9.712h-3.75v-1h3.75V5h1v1.116H20V11.5h2v1h-2v5.385h-3.77V19z");
}
</style><path class="epw_amy-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:plug-connect-sharp"} {...others} />);
}

export default Component;
