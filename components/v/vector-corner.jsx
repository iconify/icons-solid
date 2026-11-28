import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zyyrqpbvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 5L13 5C13.5523 5 14 5.4477 14 6L14 8C14 8.5523 13.5523 9 13 9L11 9C10.4477 9 10 8.5523 10 8L10 6C10 5.4477 10.4477 5 11 5ZM10 8L2 19M14 8L22 19");
}
</style><path class="zyyrqpbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:vector-corner"} {...others} />);
}

export default Component;
