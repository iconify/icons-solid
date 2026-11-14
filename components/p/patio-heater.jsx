import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z_zswebse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 7l3-3.5h6L18 7Zm6 0v13.5m-3.5 0h7M8 10q-1 1.5 0 3t0 3m8-6q-1 1.5 0 3t0 3");
}
</style><path class="z_zswebse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:patio-heater"} {...others} />);
}

export default Component;
