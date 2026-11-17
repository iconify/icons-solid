import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rr4u0-bgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2m6 0h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1m0 0h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1m6-2h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2");
}
</style><path class="rr4u0-bgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:co2-duocolor"} {...others} />);
}

export default Component;
