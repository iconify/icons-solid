import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j0yfaqb1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6h18v6h-4v-2H3zm0-2v8m4-9h6m-3 0v3m11 13a2 2 0 1 1-4 0c0-1 1-2 2-3c1 1 2 2 2 3");
}
</style><path class="j0yfaqb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:faucet-sharp"} {...others} />);
}

export default Component;
