import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qle87-rkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.5h18c0 2.25-3.75 3.5-8.5 3.5s-7.5-1.25-8-2.75Zm2 6.5h14.5M7 18l-1.5 3.25M17 18l1.5 3.25M9.5 8.5c-.9-1.2.9-2.2 0-3.75m5 3.75c-.9-1.2.9-2.2 0-3.75");
}
</style><path class="qle87-rkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:evaporating-dish-sharp"} {...others} />);
}

export default Component;
