import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jv00kgq7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.192 32.858v-13.82a2.93 2.93 0 0 1 2.93-2.93c1.444 0 2.344.427 2.962 1.227m-8.376 4.425h5.863");
}

.x2-rmpxdo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 39.652h19.072a14.914 14.914 0 0 0 14.388-10.99L43.5 8.348H24.428a14.914 14.914 0 0 0-14.388 10.99z");
}
</style><path class="jv00kgq7p"/><path class="x2-rmpxdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:funda"} {...others} />);
}

export default Component;
