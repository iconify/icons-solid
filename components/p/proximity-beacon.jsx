import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dnukjtmla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12.5V21m0-12h.01m2.74-2.75a4 4 0 0 1 0 5.5m-5.5-5.5a4 4 0 0 0 0 5.5m8-8a7.5 7.5 0 0 1 0 10.5M6.75 3.75a7.5 7.5 0 0 0 0 10.5");
}
</style><path class="dnukjtmla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:proximity-beacon"} {...others} />);
}

export default Component;
