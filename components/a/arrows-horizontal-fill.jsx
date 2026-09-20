import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ur2kkdbyp {
  fill: currentColor;
  d: path("m237.66 133.66l-32 32A8 8 0 0 1 192 160v-24H64v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 64 96v24h128V96a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32");
}
</style><path class="ur2kkdbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-horizontal-fill"} {...others} />);
}

export default Component;
