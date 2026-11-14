import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h5m-51bbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V3M2.5 21.5h5m11.5 0V3m-2.5 18.5h5M5 9q7 3.5 14 0M6.631 3.634l.619.241a.939.939 0 0 1 0 1.75l-.619.241A1.197 1.197 0 0 1 5 4.75a1.197 1.197 0 0 1 1.631-1.116");
}
</style><path class="h5m-51bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:finish-line"} {...others} />);
}

export default Component;
