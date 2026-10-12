import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g0pmk--fc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15.25h4v6h-4zm7.25-4h4v10h-4zm7.25-2.5h4v12.5h-4zm-14 1.5L8.5 5.5l3 2.5l4.75-4.75m-2.75-.5h2.75V5.5");
}
</style><path class="g0pmk--fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kpi-sharp"} {...others} />);
}

export default Component;
