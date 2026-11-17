import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ks255tqzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 9l2-2v10M9 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3m4-10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2m0 0h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3");
}
</style><path class="ks255tqzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:numbers-duocolor"} {...others} />);
}

export default Component;
