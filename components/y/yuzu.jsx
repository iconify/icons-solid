import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h9uaz4fpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.65 4.5c-8.563 0-15.505 6.942-15.505 15.506s6.942 15.506 15.506 15.506zm4.7 39c8.563 0 15.505-6.942 15.505-15.506S34.913 12.488 26.35 12.488z");
}
</style><path class="h9uaz4fpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yuzu"} {...others} />);
}

export default Component;
