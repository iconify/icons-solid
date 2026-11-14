import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.op7ertb9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5V20m-4.5 0h9M5.5 6h13m-16 7.5l3-7.5l3 7.5a3 3 0 0 1-6 0m13 0l3-7.5l3 7.5a3 3 0 0 1-6 0");
}
</style><path class="op7ertb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:f1-score"} {...others} />);
}

export default Component;
