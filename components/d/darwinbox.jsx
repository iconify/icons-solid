import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jnekhobuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.926 5.5H9.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-1.264");
}

.tiaylr0vm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.528 32.759V8.866A3.366 3.366 0 0 1 32.894 5.5h.852m-4.219 17.041c0-3.306-2.704-6.01-6.01-6.01s-6.01 2.705-6.01 6.01v3.907c0 3.306 2.704 6.01 6.01 6.01s6.01-2.704 6.01-6.01");
}
</style><path class="jnekhobuv"/><path class="tiaylr0vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:darwinbox"} {...others} />);
}

export default Component;
