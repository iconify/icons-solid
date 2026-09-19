import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rbzq51bgb {
  fill: currentColor;
  d: path("m12 6l-2-2H6.83L22 19.17V6zM2.1 2.1L.69 3.51L2 4.83V20h15.17l3.32 3.31l1.41-1.41z");
}
</style><path class="rbzq51bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-folder-off"} {...others} />);
}

export default Component;
