import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bfjr-5byz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10c0 5 2 8 4.5 8c2.25 0 3.5-2.25 3.5-4.5m9-3.5c0 5-2 8-4.5 8c-2.25 0-3.5-2.25-3.5-4.5m-8-8h15");
}
</style><path class="bfjr-5byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:breast"} {...others} />);
}

export default Component;
