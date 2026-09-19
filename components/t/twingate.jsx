import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hp9tbeb0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.713 43.5l11.092-7.623a10.86 10.86 0 0 0 4.709-8.95v-16.49L24.42 18.058a10.86 10.86 0 0 0-4.708 8.95z");
}

.zjer7ibpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.286 15.402V4.5l-11.087 7.623a10.86 10.86 0 0 0-4.713 8.948v16.494l7.232-4.973");
}
</style><path class="hp9tbeb0o"/><path class="zjer7ibpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:twingate"} {...others} />);
}

export default Component;
