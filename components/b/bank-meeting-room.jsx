import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kea1_ibph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5L4 14l-.5 6.5M4 14h4.5v6.5m12.75-15L20 14l.5 6.5M20 14h-4.5v6.5M7.75 10.25a4.25 1.5 0 1 0 8.5 0a4.25 1.5 0 1 0-8.5 0m4.25 1.5V20m-1.75.5h3.5");
}
</style><path class="kea1_ibph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bank-meeting-room"} {...others} />);
}

export default Component;
