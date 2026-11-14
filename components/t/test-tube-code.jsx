import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7t2h6b7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5V17a2.5 2.5 0 0 0 5 0V3.5M8 3.5h8M5.5 9l-3 3.5l3 3.5m13-7l3 3.5l-3 3.5");
}
</style><path class="f7t2h6b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:test-tube-code"} {...others} />);
}

export default Component;
