import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yaclojqel {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 160H88a8 8 0 0 1 0-16a16 16 0 0 0 16-16v-16H88a8 8 0 0 1 0-16h16V96a40 40 0 0 1 60-34.64a8 8 0 0 1-8 13.85A24 24 0 0 0 120 96v24h16a8 8 0 0 1 0 16h-16v16a31.7 31.7 0 0 1-4.31 16H168a8 8 0 0 1 0 16");
}
</style><path class="yaclojqel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-gbp-fill"} {...others} />);
}

export default Component;
