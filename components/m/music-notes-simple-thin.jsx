import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nxeqm2b7g {
  fill: currentColor;
  d: path("M210.46 20.85a4 4 0 0 0-3.43-.73l-128 32A4 4 0 0 0 76 56v118.87A32 32 0 1 0 84 196V59.12l120-30v113.75a32 32 0 1 0 8 21.13V24a4 4 0 0 0-1.54-3.15M52 220a24 24 0 1 1 24-24a24 24 0 0 1-24 24m128-32a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
}
</style><path class="nxeqm2b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:music-notes-simple-thin"} {...others} />);
}

export default Component;
