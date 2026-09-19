import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v_5glj9pk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.063 29.283l19.63-.06M8.486 5.5l23.277.028l7.752 7.628l-.113 29.344l-30.435-.327l.04-23.457l19.685.062");
}
</style><path class="v_5glj9pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:estkme"} {...others} />);
}

export default Component;
