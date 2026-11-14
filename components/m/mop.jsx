import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dh26qnbhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V11m-3 0h6a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 15 14H9a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 9 11m-.5 3L6 21.5m4.75-7.5L10 21.5m3.25-7.5l.75 7.5m1.5-7.5l2.5 7.5");
}
</style><path class="dh26qnbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mop"} {...others} />);
}

export default Component;
