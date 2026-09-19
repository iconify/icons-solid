import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8atucppv {
  fill: currentColor;
  d: path("M3 19h18v-6H3zm0-8h18V9H3zm0-6v2h18V5z");
}
</style><path class="h8atucppv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-horizontal-split"} {...others} />);
}

export default Component;
