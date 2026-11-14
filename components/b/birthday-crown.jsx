import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sz0n_exqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 10.75l.559.489a1.75 1.75 0 0 0 2.567-.288l1.459-2.005a1.75 1.75 0 0 1 2.83 0l1.459 2.005a1.75 1.75 0 0 0 2.567.288L18 10.75a1.012 1.012 0 0 1 1.67.887l-.728 5.83A1.75 1.75 0 0 1 17.205 19H6.795a1.75 1.75 0 0 1-1.737-1.533l-.728-5.83A1.012 1.012 0 0 1 6 10.75M12 4h.01M3.25 6h.01m17.49 0h.01M6 15.75h12");
}
</style><path class="sz0n_exqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:birthday-crown"} {...others} />);
}

export default Component;
