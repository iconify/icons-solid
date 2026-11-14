import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzw6bebri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.5h13.5a2.75 2.75 0 0 1 2.75 2.75A2.75 2.75 0 0 1 18.75 8H5.25A2.75 2.75 0 0 1 2.5 5.25A2.75 2.75 0 0 1 5.25 2.5M4.5 8v13.5M19.5 8v13.5m-17 0h19m-17-11h15M7 5.25h10");
}
</style><path class="fzw6bebri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:roller-shutter-open"} {...others} />);
}

export default Component;
