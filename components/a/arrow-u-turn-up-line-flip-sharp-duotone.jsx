import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u2joj952v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 9L19 12C19 14.7614 16.7614 17 14 17C11.2386 17 9 14.7614 9 12L9 3.3753M4.7809 8.2739L9 3L13.3002 8.3753M3 21L21 21");
}
</style><path class="u2joj952v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-u-turn-up-line-flip-sharp-duotone"} {...others} />);
}

export default Component;
