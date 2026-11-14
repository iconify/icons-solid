import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3-4ukb0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20c0-3 4-5 8-5s8 2 8 5Zm8-5c0-3 1-6 1-9m0 0c-3-1-5 0-6.5 2M13 6c3-1 5 0 6.5 2M13 6c-1-2.5-3-3-4.5-2.5");
}
</style><path class="a3-4ukb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:palm-island"} {...others} />);
}

export default Component;
