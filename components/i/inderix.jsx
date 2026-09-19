import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l4wx5wbli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.658 6.842h16.138c.563 0 1.02.457 1.02 1.02V24c0 9.476-7.683 17.158-17.158 17.158S3.5 33.476 3.5 24S11.182 6.842 20.658 6.842M13.24 16.901v14.198m7.418-14.198v14.198");
}

.z-omvwblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m37.815 16.893l6.386 6.386a1.02 1.02 0 0 1 0 1.442L32.79 36.132");
}
</style><path class="z-omvwblu"/><path class="l4wx5wbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:inderix"} {...others} />);
}

export default Component;
