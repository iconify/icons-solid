import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zes25ebhk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 4.5h8V3h2v8h-2V9.5H2m10-2.25c4 0 6 2.75 6 7.75M2 19q2.5-1.5 5 0t5 0t5 0t5 0");
}
</style><path class="zes25ebhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:outfall-pipe"} {...others} />);
}

export default Component;
