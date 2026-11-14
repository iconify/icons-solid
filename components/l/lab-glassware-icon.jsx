import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3rh8zb2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9v9.5a1.5 1.5 0 0 0 3 0V9M11 3.5v6l-2.5 9.75a1 1 0 0 0 1 1.25h5a1 1 0 0 0 1-1.25L13 9.5v-6M18.5 9v11.5h3V9");
}
</style><path class="a3rh8zb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lab-glassware-icon"} {...others} />);
}

export default Component;
