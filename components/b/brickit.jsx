import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kyrpzcbgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.5v29a4 4 0 0 0 4 4h29.2v-3.8h3.8V28.3h-3.8v-8.6h3.8V9.302h-3.8V5.5H9.5a4 4 0 0 0-4 4");
}

.s826m0bqv {
  cx: 29.7px;
  cy: 14.5px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z5vd6w_3z {
  cx: 29.7px;
  cy: 33.5px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="kyrpzcbgk"/><circle class="s826m0bqv"/><circle class="z5vd6w_3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:brickit"} {...others} />);
}

export default Component;
