import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6y_9cbje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3.75v10m4.5-10v10m2-10H9.25a3.5 3.5 0 0 0 0 7h1.25m9.75 7.75H3.75m2.75-2.75L3.75 18.5l2.75 2.75");
}
</style><path class="d6y_9cbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:text-direction-rtl-sharp"} {...others} />);
}

export default Component;
