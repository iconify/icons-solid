import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z0hbhjb5x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 19L12 19C14.7614 19 17 16.7614 17 14C17 11.2386 14.7614 9 12 9L3.3753 9M8.2739 4.7809L3 9L8.3753 13.3002M21 3L21 21");
}
</style><path class="z0hbhjb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-u-turn-left-line-sharp-two-tone"} {...others} />);
}

export default Component;
