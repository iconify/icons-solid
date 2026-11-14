import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bg69w1b7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.633 11.856C14.955 10.225 13.896 8.776 12.5 8h-4C4 10.5 3 20 7 20h5.454m4.027-4.595a10 10 0 0 0-.079-.742M8.5 8l-2-4.5c2-.5 4 1 4 3c0-2 2-3.5 4-3l-2 4.5m2.75 11.75a2.75 1.75 0 1 0 5.5 0a2.75 1.75 0 1 0-5.5 0m-1-3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m3-1.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m3 1.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0");
}
</style><path class="bg69w1b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:poop-bag"} {...others} />);
}

export default Component;
