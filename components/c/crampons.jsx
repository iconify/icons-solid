import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o01qnvbrv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13V7h5.5v2.5H18q3 0 3 1.75V13Zm0 0l2.25 5.5L7.5 13l2.25 5.5L12 13l2.25 5.5L16.5 13l2.25 5.5L21 13");
}
</style><path class="o01qnvbrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crampons"} {...others} />);
}

export default Component;
