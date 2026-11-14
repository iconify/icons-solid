import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.clvwf4bwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v5h-19Zm4 7.75C8.75 13 10 14.75 10 17a3.5 3.5 0 0 1-7 0q0-1.875 1.5-3c.25.75.75 1.5 1.25 1.75q-.375-2.25.75-4.5ZM13 15.5h7.5M18 13l2.5 2.5L18 18");
}
</style><path class="clvwf4bwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:conduction"} {...others} />);
}

export default Component;
