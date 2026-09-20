import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.erjg5db5w {
  fill: currentColor;
  d: path("M4.639 11h14.703l-.313-5H4.97zm-.068 1l-.325 5.154h15.508L19.41 12zm1.121 7l-.267-.846H3.173L4.038 5h15.924l.865 13.154h-2.252l-.267.846z");
}
</style><path class="erjg5db5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:google-wifi-outline-sharp"} {...others} />);
}

export default Component;
