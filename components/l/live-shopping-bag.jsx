import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wsba_3bam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5H15L16 21H3.5Zm2.5 0V7a2.75 2.75 0 0 1 5.5 0v1.5M15 5a3.5 3.5 0 0 1 3.5 3.5M15 2.25a6.25 6.25 0 0 1 6.25 6.25");
}
</style><path class="wsba_3bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:live-shopping-bag"} {...others} />);
}

export default Component;
