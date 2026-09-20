import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nihgczbmf {
  fill: currentColor;
  d: path("M28 128a36 36 0 0 0 36 36h40a12 12 0 0 1 0 24H64a60 60 0 0 1 0-120h40a12 12 0 0 1 0 24H64a36 36 0 0 0-36 36m164-60h-40a12 12 0 0 0 0 24h40a36 36 0 0 1 0 72h-40a12 12 0 0 0 0 24h40a60 60 0 0 0 0-120");
}
</style><path class="nihgczbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:link-simple-horizontal-break-bold"} {...others} />);
}

export default Component;
