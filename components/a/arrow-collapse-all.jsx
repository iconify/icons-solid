import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kscw2iihi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.75L9.5 9.5m.5-4.25V10H5.25m15 10.25L14.5 14.5m-.5 4.25V14h4.75m1.5-10.25L14.5 9.5M14 5.25V10h4.75m-15 10.25L9.5 14.5m.5 4.25V14H5.25");
}
</style><path class="kscw2iihi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-collapse-all"} {...others} />);
}

export default Component;
