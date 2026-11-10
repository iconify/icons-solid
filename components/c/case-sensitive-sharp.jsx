import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q6sdtc0hm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.93 18.627L7.002 6L12.074 18.627M4.19 13H9.813M22.002 10V19M22.002 15C22.002 16.657 20.659 18 19.002 18C17.345 18 16.002 16.657 16.002 15C16.002 13.343 17.345 12 19.002 12C20.659 12 22.002 13.343 22.002 15Z");
}
</style><path class="q6sdtc0hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:case-sensitive-sharp"} {...others} />);
}

export default Component;
