import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u_yvbjbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 9.58a6.5 6.5 0 1 0 8.5 0M9.5 5.5V12m9-9.25a3.5 3.5 0 1 0 2.75 5.5a3.25 3.25 0 0 1-2.75-5.5Z");
}
</style><path class="u_yvbjbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:standby-power-sharp"} {...others} />);
}

export default Component;
