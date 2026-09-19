import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tm6zy1bmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.48 24H6.64M24.9 9.96H4.5m20.4 23.25V10h11.58a7 7 0 1 1 0 14h0a7 7 0 1 1 0 14H4.5");
}
</style><path class="tm6zy1bmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ebookdroid"} {...others} />);
}

export default Component;
