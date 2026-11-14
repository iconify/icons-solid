import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u-94uhbhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v6a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 12V6a3.5 3.5 0 0 1 3.5-3.5m4.5 13v6m-4.5-15h9m-9 5H14");
}
</style><path class="u-94uhbhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pit-board"} {...others} />);
}

export default Component;
