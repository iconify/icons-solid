import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i0ut53b7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.378 13.25L23.998 2.5l18.62 10.75v21.5L23.998 45.5L5.378 34.75l-.006-21.49l37.256 21.471L23.997 24l18.607-10.772");
}
</style><path class="i0ut53b7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:westlotto"} {...others} />);
}

export default Component;
