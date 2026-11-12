import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j93j32p5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 2v5m-6 8v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4M3 17l3 3l3-3m6 0l3 3l3-3");
}
</style><path class="j93j32p5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:network-split-round"} {...others} />);
}

export default Component;
