import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zv4b-gb7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 9.25l7.5-5.5l7.5 5.5m-15 5.5l7.5-5.5l7.5 5.5m-15 5.5l7.5-5.5l7.5 5.5");
}
</style><path class="zv4b-gb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:escalation-tier-3"} {...others} />);
}

export default Component;
