import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ot3lfzbdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11c.5-2 3.5-2.25 6-1l1 1H12c0-5 5-5 5 0h4.5m-7-1h.01M4.5 15C7 13.75 9 16.25 12 15s5 1.25 7.5 0");
}
</style><path class="ot3lfzbdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:caiman"} {...others} />);
}

export default Component;
