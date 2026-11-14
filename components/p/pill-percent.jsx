import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.va_vo2hwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.697 10.707l6.01-6.01a3.25 3.25 0 0 1 4.596 0a3.25 3.25 0 0 1 0 4.596l-6.01 6.01a3.25 3.25 0 0 1-4.596 0a3.25 3.25 0 0 1 0-4.596m3.005-3.005l4.596 4.596m2.452 8.952l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="va_vo2hwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pill-percent"} {...others} />);
}

export default Component;
