import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zo0gq0buw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21q4-6.5 2.5-13h8q-1.5 6.5 2.5 13Zm4-16A2 2 0 0 1 13 3.5a2 2 0 0 1 3.5 1");
}
</style><path class="zo0gq0buw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:nuclear-plant"} {...others} />);
}

export default Component;
