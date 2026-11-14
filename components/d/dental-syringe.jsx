import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k5iuydb7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.389 7.007l2.475 2.475a1.75 1.75 0 0 1 0 2.475l-4.596 4.596a1.75 1.75 0 0 1-2.475 0l-2.475-2.475a1.75 1.75 0 0 1 0-2.474l4.596-4.597a1.75 1.75 0 0 1 2.475 0m-3.005-3.005l8.485 8.485m-1.414-7.071l-2.828 2.829m.707-4.95l4.242 4.243M8.555 15.316l-5.303 5.303");
}
</style><path class="k5iuydb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dental-syringe"} {...others} />);
}

export default Component;
