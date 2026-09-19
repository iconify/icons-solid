import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s5ft33bmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.63 24l4.696-8.137h9.397L24.42 24l-4.698 8.137h-9.397zm17.95 10.363l4.695-8.137h9.397l4.698 8.137l-4.698 8.137h-9.397zm0-20.726L28.274 5.5h9.397l4.698 8.137l-4.698 8.137h-9.397z");
}
</style><path class="s5ft33bmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:beehive"} {...others} />);
}

export default Component;
