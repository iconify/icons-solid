import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbbz_zb1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h16c2 3.5 2 11-3 11H7c-5 0-5-7.5-3-11m.75 0V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3.5m2.75 0V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6.5m2.75 0V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3.5");
}
</style><path class="bbbz_zb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:firewood-bag"} {...others} />);
}

export default Component;
