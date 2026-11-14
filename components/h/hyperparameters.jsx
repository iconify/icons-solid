import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xz5iarbmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H6m4 0h11.5m-19 7H13m4 0h4.5m-19 7H8m4 0h9.5M6 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="xz5iarbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hyperparameters"} {...others} />);
}

export default Component;
