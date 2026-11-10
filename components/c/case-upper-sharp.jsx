import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r85u4m2no {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.93 18.63L7.002 6L12.074 18.63M4.19 13H9.813M15.945 18.67L19.002 10L22.059 18.67M16.886 16H21.118");
}
</style><path class="r85u4m2no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:case-upper-sharp"} {...others} />);
}

export default Component;
