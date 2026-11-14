import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ofponebql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 2.5L10 16c-1.5 2.5-3 4-5 4c-1.5 0-2-1.5-1-2.5m11 .5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="ofponebql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bandy-stick"} {...others} />);
}

export default Component;
