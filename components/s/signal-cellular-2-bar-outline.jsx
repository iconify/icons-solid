import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yi9wkcbtj {
  fill: currentColor;
  d: path("M3 21L21 3v18zm9.289-1H20V5.427l-7.711 7.712z");
}
</style><path class="yi9wkcbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-2-bar-outline"} {...others} />);
}

export default Component;
