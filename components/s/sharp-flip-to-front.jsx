import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-yuxdb-o {
  fill: currentColor;
  d: path("M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm12 12h2v-2h-2zm6-18H7v14h14zm-2 12H9V5h10zm-8 6h2v-2h-2zm-4 0h2v-2H7zm-4 0h2v-2H3z");
}
</style><path class="h-yuxdb-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-flip-to-front"} {...others} />);
}

export default Component;
