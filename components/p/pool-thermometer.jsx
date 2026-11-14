import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n1ek3gzwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 0 1 4 0v8.25a3.25 3.25 0 1 1-4 0ZM12 8v7m-9.5 0q1.75-1.5 3.5 0q.75.75 1.5.5m9 0q.75.25 1.5-.5q1.75-1.5 3.5 0");
}
</style><path class="n1ek3gzwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pool-thermometer"} {...others} />);
}

export default Component;
