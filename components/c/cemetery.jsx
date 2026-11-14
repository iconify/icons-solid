import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qunqztn-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V8a4 4 0 0 1 8 0v12.5m2.75 0V12a3.25 3.25 0 0 1 6.5 0v8.5m-18.25 0h19M7.5 7v7M6.25 9.5h2.5");
}
</style><path class="qunqztn-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cemetery"} {...others} />);
}

export default Component;
