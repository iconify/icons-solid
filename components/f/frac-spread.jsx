import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lna36qbea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19M9.5 5h5v8.5h-5Zm-1 8.5h7v8h-7Zm1-4.25h-3m0-2v4m9 5.25H17c2.5 0 2-5.5 4.5-5.5");
}
</style><path class="lna36qbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:frac-spread"} {...others} />);
}

export default Component;
