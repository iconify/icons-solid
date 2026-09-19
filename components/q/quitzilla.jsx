import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.smgf0hjzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.984 21.984l-3.988-3.988a8.492 8.492 0 1 0 0 12.008l12.008-12.008a8.492 8.492 0 1 1 0 12.008l-3.988-3.988");
}
</style><path class="smgf0hjzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:quitzilla"} {...others} />);
}

export default Component;
