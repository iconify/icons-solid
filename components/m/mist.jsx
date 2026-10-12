import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qrj36ccia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0M3 12q2.25-1.5 4.5 0t4.5 0m4.5 0q2.25-1.5 4.5 0M3 17.5q2.25-1.5 4.5 0m4.5 0q2.25-1.5 4.5 0t4.5 0");
}
</style><path class="qrj36ccia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mist"} {...others} />);
}

export default Component;
