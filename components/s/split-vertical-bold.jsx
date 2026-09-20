import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.p9jhub98r {
  fill: currentColor;
  d: path("M220 152a12 12 0 0 1-12 12h-68v39l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 203v-39H48a12 12 0 0 1 0-24h160a12 12 0 0 1 12 12M48 116h160a12 12 0 0 0 0-24h-68V53l11.51 11.52a12 12 0 1 0 17-17l-32-32a12 12 0 0 0-17 0l-32 32a12 12 0 1 0 17 17L116 53v39H48a12 12 0 0 0 0 24");
}
</style><path class="p9jhub98r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:split-vertical-bold"} {...others} />);
}

export default Component;
