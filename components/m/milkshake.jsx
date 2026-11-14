import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w5u19bcrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7h11L15 16.5H9Zm5.5 9.5V21m-3.5 0h7m-8-14c0-2.25 2-3.75 4.5-3.75s4.5 1.5 4.5 3.75m-3-3.5L16 2");
}
</style><path class="w5u19bcrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:milkshake"} {...others} />);
}

export default Component;
