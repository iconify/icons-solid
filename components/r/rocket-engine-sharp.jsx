import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j5bo-ybzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11M9.75 3h4.5v3l-1 1.5c0 3.5 2.25 6 4.75 7.5H6c2.5-1.5 4.75-4 4.75-7.5l-1-1.5ZM12 18v3.25M8.75 18L8 20.25M15.25 18l.75 2.25");
}
</style><path class="j5bo-ybzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rocket-engine-sharp"} {...others} />);
}

export default Component;
