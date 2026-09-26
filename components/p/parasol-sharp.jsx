import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g9ymhfiln {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 14C2 11.5 3.75 9.25 5.875 7.25C8 5.25 10.5 3.5 12 2C13.5 3.5 16 5.25 18.125 7.25C20.25 9.25 22 11.5 22 14C20.75 12 18.25 12 17 14C15.75 12 13.25 12 12 14C10.75 12 8.25 12 7 14C5.75 12 3.25 12 2 14ZM12 14L12 23");
}
</style><path class="g9ymhfiln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:parasol-sharp"} {...others} />);
}

export default Component;
