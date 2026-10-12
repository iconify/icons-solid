import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iaanmp-bw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 20V5.75h8.25M11 12.5h6.5m-12-8.75a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 1 1 0-4.5");
}
</style><path class="iaanmp-bw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:degree-fahrenheit"} {...others} />);
}

export default Component;
