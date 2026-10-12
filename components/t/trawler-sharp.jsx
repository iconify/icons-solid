import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sm_7mqqlj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14.5h17.75l-.36.66l-2.03 3.68l-.36.66H5l-.31-.68l-1.63-3.64l-.31-.68zM5.75 10h5.5v4.5h-5.5zm8.75 4.5V4m0 0c3.5 1.25 6.25 3.5 6.5 7.5");
}
</style><path class="sm_7mqqlj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trawler-sharp"} {...others} />);
}

export default Component;
