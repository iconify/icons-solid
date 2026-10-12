import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xx1winbon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 17.25h-8V4.75h18.5v6m-18.5-2h18.5m-3.25 6A3.25 3.25 0 1 1 14.75 18m-1.25 1.25L14.75 18L16 19.25");
}
</style><path class="xx1winbon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:recurring-sharp"} {...others} />);
}

export default Component;
