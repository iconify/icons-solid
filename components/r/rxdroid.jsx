import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s2d7v5oci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.111 31.111L16.889 16.889");
}

.sbuhdtbfx {
  width: 43.995px;
  height: 20.112px;
  x: 2.002px;
  y: 13.944px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 10.056px;
}
</style><rect transform="rotate(-45 24 24)" class="sbuhdtbfx"/><path class="s2d7v5oci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rxdroid"} {...others} />);
}

export default Component;
