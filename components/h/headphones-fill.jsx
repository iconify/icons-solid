import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.j-kr0gb5l {
  fill: currentColor;
  d: path("M232 128v56a24 24 0 0 1-24 24h-16a24 24 0 0 1-24-24v-40a24 24 0 0 1 24-24h23.65a87.71 87.71 0 0 0-87-80H128a88 88 0 0 0-87.64 80H64a24 24 0 0 1 24 24v40a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24v-56a104.11 104.11 0 0 1 177.89-73.34A103.4 103.4 0 0 1 232 128");
}
</style><path class="j-kr0gb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:headphones-fill"} {...others} />);
}

export default Component;
