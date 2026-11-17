import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nt8-w3nsm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 14H23M4 14V22H20V14M12 14V5C12 3.343 13.343 2 15 2C16.657 2 18 3.343 18 5V7M16 14V10H21M8 14V10H3");
}
</style><path class="nt8-w3nsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sink-sharp"} {...others} />);
}

export default Component;
