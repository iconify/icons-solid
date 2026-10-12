import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mjls6rjfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l2.75 2.357V15.25h-5.5V5.107zm-2.75 8.5l-3 3v1m8.5-4l3 3v1m-14.25 0h17v3.25h-17zm7 3.25l-1.375 2.75H6.25m7.25-2.75l1.375 2.75h2.875");
}
</style><path class="mjls6rjfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:launch-pad-sharp"} {...others} />);
}

export default Component;
