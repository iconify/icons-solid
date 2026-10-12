import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5j-9cciu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 2.75h11v18.5h-11zm0 6.15h11m-11 6.2h11M9.5 5.5V6m0 12v.5m6.5-13V6m0 12v.5M2.75 9h2m-2 3h2.5m-2.5 3h2");
}
</style><path class="l5j-9cciu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:frame-rate-sharp"} {...others} />);
}

export default Component;
