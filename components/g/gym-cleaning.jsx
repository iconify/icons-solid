import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x2aye46cp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11h9v10.5H4Zm2 0V5a1.5 1.5 0 0 1 1.5-1.5h7V7h-4v4m.75-4l1.25 2M18 3.5h.01m2.49 2.25h.01M18 8h.01");
}
</style><path class="x2aye46cp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gym-cleaning"} {...others} />);
}

export default Component;
