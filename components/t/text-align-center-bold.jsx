import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nnucscbgm {
  fill: currentColor;
  d: path("M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m36 28a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24Zm152 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m-24 40H64a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24");
}
</style><path class="nnucscbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-align-center-bold"} {...others} />);
}

export default Component;
