import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y86s7f9xs {
  fill: currentColor;
  d: path("M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M16 128a40 40 0 1 1 40 40a40 40 0 0 1-40-40m184 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><path class="y86s7f9xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:voicemail"} {...others} />);
}

export default Component;
