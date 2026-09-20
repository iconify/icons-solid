import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ph3glsp7n {
  fill: currentColor;
  d: path("M10.75 20.5v-6.315l-5.477 3.167l-1.25-2.179L9.5 12L4.023 8.852l1.25-2.179l5.477 3.168V3.5h2.5v6.34l5.477-3.167l1.25 2.179L14.5 12l5.477 3.173l-1.25 2.179l-5.477-3.168V20.5z");
}
</style><path class="ph3glsp7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:emergency"} {...others} />);
}

export default Component;
