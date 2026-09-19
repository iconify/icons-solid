import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ix4264b-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.5 34.717h4.333m4.334-21.434H16.5M20.833 24h4.334M29.5 13.283h4.333m4.334 21.434H42.5M5.667 38.5v-29m8.666 29v-29M23 38.5v-29m8.667 29v-29m8.666 29v-29");
}
</style><path class="ix4264b-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:motoaudio"} {...others} />);
}

export default Component;
