import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s90hfmbru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 17.833h12.333v12.333H5.5zm12.333 0h12.333v12.333H17.833zm0 12.334h12.333V42.5H17.833zm12.334-12.334H42.5v12.333H30.167zm0-12.333H42.5v12.333H30.167z");
}
</style><path class="s90hfmbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:word-maker"} {...others} />);
}

export default Component;
