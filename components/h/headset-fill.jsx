import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wdqnjwbai {
  fill: currentColor;
  d: path("M232 128v80a40 40 0 0 1-40 40h-56a8 8 0 0 1 0-16h56a24 24 0 0 0 24-24h-24a24 24 0 0 1-24-24v-40a24 24 0 0 1 24-24h23.65A88 88 0 0 0 66 65.54A87.3 87.3 0 0 0 40.36 120H64a24 24 0 0 1 24 24v40a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24v-56a104.11 104.11 0 0 1 177.89-73.34A103.4 103.4 0 0 1 232 128");
}
</style><path class="wdqnjwbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:headset-fill"} {...others} />);
}

export default Component;
