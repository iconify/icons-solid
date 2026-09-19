import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gdu0l2a4x {
  fill: currentColor;
  d: path("M3 15h18v-2H3zm0 4h18v-2H3zm0-8h18V9H3zm0-6v2h18V5z");
}
</style><path class="gdu0l2a4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:reorder"} {...others} />);
}

export default Component;
