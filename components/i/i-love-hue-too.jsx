import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p8_ch-pnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.136 9.1c3.31-3.409 5.46-3.6 7.525-3.6c5.815 0 10.478 6.055 10.394 11.612c-.131 8.693-5.281 16.117-17.932 25.388C12.748 34.747 6.137 24.862 5.947 17.599C5.808 12.318 10.823 5.5 16.665 5.5c2.256 0 4.125.148 7.471 3.6");
}
</style><path class="p8_ch-pnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:i-love-hue-too"} {...others} />);
}

export default Component;
