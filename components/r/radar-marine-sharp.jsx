import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rgntsjbgd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 6h17.5v2.25H3.25zM10 8.25h4V12h-4zM12 12v7.75m-3.5.75h7m1.94-10.86A6 6 0 0 1 15 12.3m4.99-2.29a8.5 8.5 0 0 1-3.11 4.05");
}
</style><path class="rgntsjbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:radar-marine-sharp"} {...others} />);
}

export default Component;
