import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhzyqwbzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.25h12.5M3.75 11h7m-7 4.75h4.5M16 21l-4.4-4.35A2.95 2.95 0 0 1 16 12.8a2.95 2.95 0 0 1 4.4 3.85Z");
}
</style><path class="zhzyqwbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wishlist-sharp"} {...others} />);
}

export default Component;
