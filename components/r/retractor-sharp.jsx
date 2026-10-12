import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g1wg8jbnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5h18.5m-10.75 0V3.25m3 2.25V3.25M5 5.5v11a2.125 2.125 0 0 0 4.25 0M19 5.5v11a2.125 2.125 0 0 1-4.25 0");
}
</style><path class="g1wg8jbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:retractor-sharp"} {...others} />);
}

export default Component;
