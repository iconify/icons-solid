import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rk2ttubzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9a6 6 0 1 1 12 0c0 6-6 5-6 9a3 3 0 0 1-6 0m8-9a2 2 0 1 0-4 0c2 0 2 3 0 3m12-8a8.6 8.6 0 0 1 0 10");
}
</style><path class="rk2ttubzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hearing"} {...others} />);
}

export default Component;
