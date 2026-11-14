import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w_5cw1y7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10V8.5a2.5 2.5 0 0 1 .5-4a3.5 3.5 0 0 1 6 0a2.5 2.5 0 0 1 .5 4V10ZM12 7v3m-3.5 0v1.5a3.5 3.5 0 0 0 7 0V10m-11 11.5c0-2.25 3.25-3.75 7.5-3.75s7.5 1.5 7.5 3.75");
}
</style><path class="w_5cw1y7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chef"} {...others} />);
}

export default Component;
