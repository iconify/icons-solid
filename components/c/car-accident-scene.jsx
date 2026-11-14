import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zm35c7ipg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.417 8.595l2.394 6.914a1.5 1.5 0 0 1-1.418 1.991H9.607a1.5 1.5 0 0 1-1.418-1.991l2.394-6.914a1.5 1.5 0 0 1 2.834 0M5 20.5h14M9.75 11h4.5");
}
</style><path class="zm35c7ipg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:car-accident-scene"} {...others} />);
}

export default Component;
