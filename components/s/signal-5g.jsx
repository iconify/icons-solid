import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m64bh4aib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 7H4.75l-.5 4.25c.5-.35 1.25-.5 2-.5c2 0 3.5 1.25 3.5 3.25c0 1.75-1.5 3-3.5 3c-1 0-2-.5-2.75-1m17.58-5.294A5 5 0 1 1 16.25 7m5 5H17");
}
</style><path class="m64bh4aib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:signal-5g"} {...others} />);
}

export default Component;
