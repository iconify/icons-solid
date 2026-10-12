import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q4s2crwhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.75h17.5l-.37.93l-.64 1.64l-.37.93H4.13l-.37-.93l-.64-1.64l-.37-.93zm2.56 6.5h12.38l-.37.93l-.64 1.64l-.37.93H6.69l-.37-.93l-.64-1.64l-.37-.93zm2.56 6.5h7.26l-.37.93l-.64 1.64l-.37.93h-5.5l-.37-.93l-.64-1.64l-.37-.93z");
}
</style><path class="q4s2crwhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:funnel-sharp"} {...others} />);
}

export default Component;
