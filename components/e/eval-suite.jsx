import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmk68jbmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5L4.5 6.75l3-3m-4.75 7.5L4.5 13l3-3m-4.75 7.5l1.75 1.75l3-3m3.25-11h10.5m-10.5 6.25h10.5m-10.5 6.25h7");
}
</style><path class="fmk68jbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:eval-suite"} {...others} />);
}

export default Component;
