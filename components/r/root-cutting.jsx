import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aeqdfp_dl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.5v10M12 8c0-3 2.5-5 6-5c0 3.5-2.5 5-6 5m0 3c0-3-2.5-5-6-5c0 3.5 2.5 5 6 5m0 4.5V21m0-5.5q-3.5 1-4 5m4-5q3.5 1 4 5");
}
</style><path class="aeqdfp_dl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:root-cutting"} {...others} />);
}

export default Component;
