import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jdah40d4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h14A2.5 2.5 0 0 1 21.5 6A2.5 2.5 0 0 1 19 8.5H5A2.5 2.5 0 0 1 2.5 6A2.5 2.5 0 0 1 5 3.5m-1 8h16M5.5 6h.01M18.5 6h.01M12 11.5V16m-2.75 2.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><path class="jdah40d4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:conveyor-pull-cord"} {...others} />);
}

export default Component;
