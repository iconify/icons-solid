import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ta2q_ibik {
  fill: currentColor;
  d: path("M148 36H88a4 4 0 0 0-4 4v100H56a4 4 0 0 0 0 8h28v24H56a4 4 0 0 0 0 8h28v36a4 4 0 0 0 8 0v-36h52a4 4 0 0 0 0-8H92v-24h56a56 56 0 0 0 0-112m0 104H92V44h56a48 48 0 0 1 0 96");
}
</style><path class="ta2q_ibik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-rub-thin"} {...others} />);
}

export default Component;
