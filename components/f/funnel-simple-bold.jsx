import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jm_qcm4gp {
  fill: currentColor;
  d: path("M204 136a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h128a12 12 0 0 1 12 12m28-60H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-80 96h-48a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24");
}
</style><path class="jm_qcm4gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:funnel-simple-bold"} {...others} />);
}

export default Component;
