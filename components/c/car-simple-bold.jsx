import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tmol8q92y {
  fill: currentColor;
  d: path("M240 100h-8.2l-26.72-60.12A20 20 0 0 0 186.8 28H69.2a20 20 0 0 0-18.28 11.88L24.2 100H16a12 12 0 0 0 0 24h4v76a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-12h80v12a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-76h4a12 12 0 0 0 0-24M71.8 52h112.4l21.33 48H50.47ZM212 196h-20v-20a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v20H44v-72h168Z");
}
</style><path class="tmol8q92y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:car-simple-bold"} {...others} />);
}

export default Component;
