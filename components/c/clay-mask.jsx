import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zx6dgb81r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 12h17.5a8.75 8.25 0 0 1-17.5 0m8.65-2.95l1.2.9q.6.45 1.05-.15l.9-1.2q.45-.6-.15-1.05l-1.2-.9q-.6-.45-1.05.15l-.9 1.2q-.45.6.15 1.05m3.3-3.15l2.1-2.8M8 16h8");
}
</style><path class="zx6dgb81r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:clay-mask"} {...others} />);
}

export default Component;
