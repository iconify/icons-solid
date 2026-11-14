import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ds_4vhbyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.596 4.697l.707.707a1.75 1.75 0 0 1 0 2.475l-7.424 7.424a1.75 1.75 0 0 1-2.475 0l-.707-.707a1.75 1.75 0 0 1 0-2.475l7.424-7.424a1.75 1.75 0 0 1 2.475 0M2.5 19.5q2.5-2.5 5 0t5 0");
}
</style><path class="ds_4vhbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:conte-crayon"} {...others} />);
}

export default Component;
