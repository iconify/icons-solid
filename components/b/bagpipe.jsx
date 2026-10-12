import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n0wg4ib8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.63 17.39a6.25 4.5-20 1 0 11.74-4.28a6.25 4.5-20 1 0-11.74 4.28M7.75 11l4.5-7.75m-1.25 8l4.5-7.75M14.25 12l4.5-7.75M6 18.75l-2.25 2.5m1-9.5l-2-2.25");
}
</style><path class="n0wg4ib8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bagpipe"} {...others} />);
}

export default Component;
