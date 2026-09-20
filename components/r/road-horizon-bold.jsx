import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mere_nqgf {
  fill: currentColor;
  d: path("M237.88 202.46a12 12 0 0 1-16.34-4.58L153 76h-13v4a12 12 0 0 1-24 0v-4h-13L34.46 197.88a12 12 0 1 1-20.92-11.76L75.48 76H24a12 12 0 0 1 0-24h208a12 12 0 0 1 0 24h-51.48l61.94 110.12a12 12 0 0 1-4.58 16.34M128 108a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m0 56a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12");
}
</style><path class="mere_nqgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:road-horizon-bold"} {...others} />);
}

export default Component;
