import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xgrlcybsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19v-4c0-3.5 2-5 6.5-5s6.5 1.5 6.5 5v4m-9-9V6.5A1.5 1.5 0 0 1 8.5 5H14M2.5 19h19m-2-5v5");
}
</style><path class="xgrlcybsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:curling-hack"} {...others} />);
}

export default Component;
