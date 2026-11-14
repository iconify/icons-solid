import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.og8uorbms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5v-4H7V13h4.5V8.5H16V4h4.5m-18 17.5H11m4.75.25l3.75-5.5c.75-1.25 0-2.5-1.5-2.5s-2.25 1.25-1.5 2.5l3.75 5.5");
}
</style><path class="og8uorbms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cancer-staging"} {...others} />);
}

export default Component;
