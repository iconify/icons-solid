import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jfgsiojgl {
  fill: currentColor;
  d: path("M220 48v48a12 12 0 0 1-24 0V77l-35.51 35.52a12 12 0 0 1-17-17L179 60h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12M95.51 143.51L60 179v-19a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12h48a12 12 0 0 0 0-24H77l35.52-35.51a12 12 0 0 0-17-17ZM208 148a12 12 0 0 0-12 12v19l-35.51-35.52a12 12 0 0 0-17 17L179 196h-19a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12M77 60h19a12 12 0 0 0 0-24H48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l35.51 35.52a12 12 0 0 0 17-17Z");
}
</style><path class="jfgsiojgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-out-bold"} {...others} />);
}

export default Component;
