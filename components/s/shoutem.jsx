import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xvu5zw_vq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.849 6.13l18.026 18.453a2.092 2.092 0 0 1-.657 3.378L8.468 42.317a2.092 2.092 0 0 1-2.748-2.772l14.724-32.81a2.092 2.092 0 0 1 3.405-.605");
}
</style><path class="xvu5zw_vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shoutem"} {...others} />);
}

export default Component;
