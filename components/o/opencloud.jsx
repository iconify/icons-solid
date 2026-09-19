import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.khnw39btm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.501 34.547L24 43.5L8.499 34.547m0-21.094L24 4.5l15.501 8.953M15.56 19.124L24 24l8.44-4.876M24 24v9.75");
}
</style><path class="khnw39btm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:opencloud"} {...others} />);
}

export default Component;
