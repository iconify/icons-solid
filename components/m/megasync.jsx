import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c34b6pqru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 8.797a21.5 21.5 0 0 0 20.768 35.97L24 39.203m0-30.406l-5.565-5.564a21.5 21.5 0 0 1 20.768 35.97");
}

.v5bl-sbhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.6 29.987V18L24 30l8.4-11.982V30");
}
</style><path class="c34b6pqru"/><path class="v5bl-sbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:megasync"} {...others} />);
}

export default Component;
