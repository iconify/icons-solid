import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqrdqh2ny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16.5L8 13a2.12 2.12 0 0 1 3 0a2.12 2.12 0 0 1 0 3l-3.5 3.5a2.12 2.12 0 0 1-3 0a2.12 2.12 0 0 1 0-3M11 13l3.5-3.5m0 0c0-4 2.5-6.5 5.25-6.5c1.75 0 1.75 2.5-.25 4.25");
}
</style><path class="bqrdqh2ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dental-scaler"} {...others} />);
}

export default Component;
