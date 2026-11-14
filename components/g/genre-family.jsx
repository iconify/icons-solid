import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.stbe3eb-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 21.5v-9.75a2.5 2.5 0 0 1 5 0v9.75m9.25-16.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M16.5 21.5v-9.75a2.5 2.5 0 0 1 5 0v9.75M10.25 11a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-.5 10.5v-4a2.25 2.25 0 0 1 4.5 0v4");
}
</style><path class="stbe3eb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:genre-family"} {...others} />);
}

export default Component;
