import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qd4b86b0z {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 7L17 7C19.7614 7 22 9.2386 22 12C22 14.7614 19.7614 17 17 17L15.39 17L13.61 14.3166L10.39 14.3166L8.61 17L7 17C4.2386 17 2 14.7614 2 12C2 9.2386 4.2386 7 7 7Z");
}
</style><path class="qd4b86b0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:vision-pro-sharp-duotone"} {...others} />);
}

export default Component;
