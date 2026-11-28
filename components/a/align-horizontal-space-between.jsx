import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.psgn6tbkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 2V22M4 2V22M4 9V15C4 16.1046 4.8954 17 6 17H7C8.1046 17 9 16.1046 9 15V9C9 7.8954 8.1046 7 7 7H6C4.8954 7 4 7.8954 4 9ZM15 9V15C15 16.1046 15.8954 17 17 17H18C19.1046 17 20 16.1046 20 15V9C20 7.8954 19.1046 7 18 7H17C15.8954 7 15 7.8954 15 9Z");
}
</style><path class="psgn6tbkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-horizontal-space-between"} {...others} />);
}

export default Component;
