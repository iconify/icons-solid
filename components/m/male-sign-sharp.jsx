import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.okrpi6b3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8.75a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 1 1 0-10.5m3.71 1.54L20 4m-5.25 0H20v5.25");
}
</style><path class="okrpi6b3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:male-sign-sharp"} {...others} />);
}

export default Component;
