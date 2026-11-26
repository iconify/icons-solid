import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.klk7bac5k {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 3L9 3C6.2386 3 4 5.2386 4 8C4 10.7614 6.2386 13 9 13L14 13M14 3L14 22M19 3L19 22");
}
</style><path class="klk7bac5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pilcrow-sharp-two-tone"} {...others} />);
}

export default Component;
