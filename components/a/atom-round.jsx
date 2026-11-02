import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p0zgrpbix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20c-2.21 2.21-7.582.418-12-4S1.79 6.21 4 4s7.582-.418 12 4s6.21 9.79 4 12m0-16c2.21 2.21.418 7.582-4 12s-9.79 6.21-12 4s-.418-7.582 4-12s9.79-6.21 12-4m-9 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="p0zgrpbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:atom-round"} {...others} />);
}

export default Component;
