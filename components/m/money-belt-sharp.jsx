import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tl2f_3bup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 12.75l-1.75-.25l-1.5-1.25M18 12.75l1.75-.25l1.5-1.25M6 9h12v7.5H6zm2.5 2.75h7m0 0v2");
}
</style><path class="tl2f_3bup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:money-belt-sharp"} {...others} />);
}

export default Component;
