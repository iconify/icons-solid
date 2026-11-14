import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qhlvombuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5V8a3.5 3.5 0 0 0 7 0V6.5m-8.5 0H16m-9 0v-1a3.5 3 0 0 1 7 0v1m-11 14c0-3.5 3.25-6 7.5-6c.732 0 1.434.074 2.096.215M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm0 0h7M18 18v3.5");
}
</style><path class="qhlvombuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bus-driver"} {...others} />);
}

export default Component;
