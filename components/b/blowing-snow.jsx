import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uqbsnn7bv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8H14a2.5 2.5 0 1 0-2.5-2.5m-9 6.5H9m-6.5 4h14a2.5 2.5 0 1 1-2.5 2.5m-.5-6.5h.01m6.99 0h.01M8 20.5h.01");
}
</style><path class="uqbsnn7bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:blowing-snow"} {...others} />);
}

export default Component;
