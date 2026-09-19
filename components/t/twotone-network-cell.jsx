import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gb235eb5s {
  fill: currentColor;
  d: path("M2 22h20V2zm18-2h-3V9.83l3-3z");
}
</style><path class="gb235eb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-network-cell"} {...others} />);
}

export default Component;
