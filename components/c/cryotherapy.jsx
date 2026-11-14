import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qmu9zuolp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5V8a5 5 0 0 1 10 0v13.5ZM8 3v18.5m10.75-7V21m2.815-4.875l-5.63 3.25m5.63 0l-5.63-3.25");
}
</style><path class="qmu9zuolp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cryotherapy"} {...others} />);
}

export default Component;
