import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nb1x3m3gr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 18V3H7v7.25l-2.25 1.5v5.125L6.25 18Zm3 0V3H17v7.25l2.25 1.5v5.125L17.75 18Zm-7.25 3h11.5");
}
</style><path class="nb1x3m3gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:prayer-hands-sharp"} {...others} />);
}

export default Component;
