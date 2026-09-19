import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.spmq4vbsj {
  fill: currentColor;
  d: path("M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3zM8 17H6v-2h2zm0-4H6v-2h2zm0-4H6V7h2zm6 10h-4V5h4zm4-2h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2z");
}
</style><path class="spmq4vbsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-theaters"} {...others} />);
}

export default Component;
