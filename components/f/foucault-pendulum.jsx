import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.shrcpvbed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12m-6 0l3.75 9m-2 3a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m7.75 4.454a19 19 0 0 1-19 0");
}
</style><path class="shrcpvbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:foucault-pendulum"} {...others} />);
}

export default Component;
