import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bj-kj6bja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.5 5.5h-21a8 8 0 0 0-8 8v21a8 8 0 0 0 8 8h21a8 8 0 0 0 8-8v-21a8 8 0 0 0-8-8");
}

.jwj2babvj {
  width: 15px;
  height: 15px;
  x: 16.5px;
  y: 16.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}
</style><path class="bj-kj6bja"/><rect class="jwj2babvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:recon"} {...others} />);
}

export default Component;
