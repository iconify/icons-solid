import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fbljz4bsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h14a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 9H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 4m.5 5v10.5M15.5 9v6.5m-.5 4.25a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0m4.5 0V14m0 0l2 1.5");
}
</style><path class="fbljz4bsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:piano-bench"} {...others} />);
}

export default Component;
