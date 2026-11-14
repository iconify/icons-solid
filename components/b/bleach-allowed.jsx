import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zz6m9rjkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.517 6.134l6.473 11.243A1.75 1.75 0 0 1 18.473 20H5.527a1.75 1.75 0 0 1-1.517-2.623l6.473-11.243a1.75 1.75 0 0 1 3.034 0");
}
</style><path class="zz6m9rjkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bleach-allowed"} {...others} />);
}

export default Component;
