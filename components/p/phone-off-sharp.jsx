import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h823bzb4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11q9.25-8.75 18.5 0v3.5h-4.5V12Q12 7.75 7.25 12v2.5h-4.5v-1ZM12 12.75v6.5M9.75 17L12 19.25L14.25 17");
}
</style><path class="h823bzb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:phone-off-sharp"} {...others} />);
}

export default Component;
