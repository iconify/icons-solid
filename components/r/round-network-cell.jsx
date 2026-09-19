import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.txcp15bpc {
  fill: currentColor;
  d: path("M4.41 22H21c.55 0 1-.45 1-1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71M20 20h-3V9.83l3-3z");
}
</style><path class="txcp15bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-network-cell"} {...others} />);
}

export default Component;
