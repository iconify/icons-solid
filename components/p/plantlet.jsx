import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iz1t9lbuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 19.25V11m0 3c-4 0-7.5-2.5-7.5-7c4 0 7.5 2.5 7.5 7m0-3c0-4.5 3.5-7.5 7.5-7.5C19.5 8 16 11 12 11M5 21q7-3.5 14 0");
}
</style><path class="iz1t9lbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:plantlet"} {...others} />);
}

export default Component;
