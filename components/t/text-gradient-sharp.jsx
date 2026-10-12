import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pvzd_hq1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 14.25l6.5-11l6.5 11m-10.65-4h8.3M3 17.25h18V21H3zm4.5 0V21m4.5-3.75V21m4.5-3.75V21");
}
</style><path class="pvzd_hq1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:text-gradient-sharp"} {...others} />);
}

export default Component;
