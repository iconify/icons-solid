import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_qt0ccxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.774 8.534l-3.486 7.891A1.216 1.216 0 0 1 12 16.243l-.624-2.372a1.75 1.75 0 0 0-1.247-1.247L7.757 12a1.216 1.216 0 0 1-.182-2.288l7.891-3.486a1.75 1.75 0 0 1 2.308 2.308");
}
</style><path class="b_qt0ccxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:navigation-2"} {...others} />);
}

export default Component;
