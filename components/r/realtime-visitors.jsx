import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.muzb4thcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c0-3.25 2.5-5.5 6-5.5c1.622 0 3.029.483 4.072 1.325M5 8.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m8.5-1.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m3 5.5c1.732 0 3.168.593 4.079 1.55M18 18.5h.01m2.288-1.928a3 3 0 0 1 0 3.856m-4.596 0a3 3 0 0 1 0-3.856");
}
</style><path class="muzb4thcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:realtime-visitors"} {...others} />);
}

export default Component;
