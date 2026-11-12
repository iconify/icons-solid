import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qrx5-gfmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 14a7 7 0 1 0 14 0a7 7 0 0 0-14 0M9 3h6m-3 0v4m-4 7h2l1-3l2 6l1-3h2");
}
</style><path class="qrx5-gfmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:latency-sharp"} {...others} />);
}

export default Component;
