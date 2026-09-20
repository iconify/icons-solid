import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z37kolb6t {
  fill: currentColor;
  d: path("M80 116h96a12 12 0 0 1 0 24H80a12 12 0 0 1 0-24m24 48H64a36 36 0 0 1 0-72h40a12 12 0 0 0 0-24H64a60 60 0 0 0 0 120h40a12 12 0 0 0 0-24m88-96h-40a12 12 0 0 0 0 24h40a36 36 0 0 1 0 72h-40a12 12 0 0 0 0 24h40a60 60 0 0 0 0-120");
}
</style><path class="z37kolb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:link-simple-horizontal-bold"} {...others} />);
}

export default Component;
