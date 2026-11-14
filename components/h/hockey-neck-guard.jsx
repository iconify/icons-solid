import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ho6n06iac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6c2.5 3.5 9.5 3.5 12 0v6c0 5-3 8.5-6 8.5S6 17 6 12Zm0 0L3 3.5M18 6l3-2.5");
}
</style><path class="ho6n06iac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hockey-neck-guard"} {...others} />);
}

export default Component;
