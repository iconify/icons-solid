import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bggn8mb2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5h8.5m-5.5 7h7m-10 7h6m4.5 0h5a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H14.5m2-2.25L14.25 5l2.25 2.25");
}
</style><path class="bggn8mb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:loop-code"} {...others} />);
}

export default Component;
