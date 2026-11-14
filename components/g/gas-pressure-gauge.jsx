import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pk6hr2sys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9m7 7v3m-9 0h18M3 22h18M12 9h.01M12 9l3-3M5 9h2.5M7 4l1.75 1.75M12 2v2.5");
}
</style><path class="pk6hr2sys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gas-pressure-gauge"} {...others} />);
}

export default Component;
