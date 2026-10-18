import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo1phjrud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 2C12.8954 2 12 2.8954 12 4L12 8.9645C12 9.4949 11.7893 10.0036 11.4142 10.3787L10.1464 11.6464C10.0527 11.7402 10 11.8674 10 12C10 12.1326 10.0527 12.2598 10.1464 12.3536L11.4142 13.6213C11.7893 13.9964 12 14.5051 12 15.0355L12 20C12 21.1046 12.8954 22 14 22");
}
</style><path class="bo1phjrud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:brace-left"} {...others} />);
}

export default Component;
