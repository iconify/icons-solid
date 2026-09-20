import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xrbqsgbsb {
  fill: currentColor;
  d: path("M140 164v68a12 12 0 0 1-24 0v-68a12 12 0 0 1 24 0m68-72h-51l35.52-35.51a12 12 0 0 0-17-17L140 75V24a12 12 0 0 0-24 0v51L80.49 39.51a12 12 0 0 0-17 17L99 92H48a12 12 0 0 0 0 24h51l-35.49 35.51a12 12 0 0 0 17 17L128 121l47.51 47.52a12 12 0 0 0 17-17L157 116h51a12 12 0 0 0 0-24");
}
</style><path class="xrbqsgbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:linktree-logo-bold"} {...others} />);
}

export default Component;
