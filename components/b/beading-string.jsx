import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l7t1i1wgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M15 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-6.75 9.25l2-2m3.5-3.5l2-2");
}
</style><path class="l7t1i1wgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:beading-string"} {...others} />);
}

export default Component;
