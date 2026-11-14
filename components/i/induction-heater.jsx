import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3ws9qbjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12a1.5 5.5 0 1 0 3 0a1.5 5.5 0 1 0-3 0Zm5 0a1.5 5.5 0 1 0 3 0a1.5 5.5 0 1 0-3 0Zm5 0a1.5 5.5 0 1 0 3 0a1.5 5.5 0 1 0-3 0Zm-13 0h19");
}
</style><path class="b3ws9qbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:induction-heater"} {...others} />);
}

export default Component;
