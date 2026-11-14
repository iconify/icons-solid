import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dzu07ibkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3L12 13.5L9.5 16h-3a3 3 0 0 1-3-3ZM12 6v4.5");
}
</style><path class="dzu07ibkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:scuba-mask"} {...others} />);
}

export default Component;
