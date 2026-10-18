import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r7213wocu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.9672 13.9812L5 13.8563C5.5395 11.8015 6.5934 10.4402 7.9162 10.0894C9.239 9.7386 10.7149 10.4291 12 12C13.2851 13.5709 14.761 14.2614 16.0838 13.9106C17.4066 13.5598 18.4605 12.1985 19 10.1437L19.0328 10.0188");
}
</style><path class="r7213wocu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tilde-sharp"} {...others} />);
}

export default Component;
