import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v25vjubpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.364 5.636za2.5 2.5 0 0 1 0 3.536L12 15.536a2.5 2.5 0 0 1-3.536 0a2.5 2.5 0 0 1 0-3.536l6.364-6.364a2.5 2.5 0 0 1 3.536 0M5.5 18.5L4 20");
}
</style><path class="v25vjubpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ballpoint-pen"} {...others} />);
}

export default Component;
