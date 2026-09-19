import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.paryct4qy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.887 14.25L24 4.5L7.113 14.25v19.5L24 43.5l16.887-9.75z");
}

.s2d8psb-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.12 11.668v16.443l-14.24 8.221V19.889z");
}

.u4ktx5fci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.113 14.25L24 24l16.887-9.75M24 43.5V24");
}
</style><path class="paryct4qy"/><path class="u4ktx5fci"/><path class="s2d8psb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:depth-lab"} {...others} />);
}

export default Component;
