import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lakod4brx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 9L5 12C5 14.7614 7.2386 17 10 17C12.7614 17 15 14.7614 15 12L15 3.3753M19.2191 8.2739L15 3L10.6998 8.3753M21 21L3 21");
}
</style><path class="lakod4brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-u-turn-up-line-sharp-fill"} {...others} />);
}

export default Component;
