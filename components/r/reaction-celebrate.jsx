import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mstthmbrm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.352 17.395l2.194-5.85a1.75 1.75 0 0 1 2.876-.623l3.656 3.656a1.75 1.75 0 0 1-.623 2.876l-5.85 2.194a1.75 1.75 0 0 1-2.253-2.253M11.5 7l1-4m1.25 7.25l4.5-4.5M17 13l4-1");
}
</style><path class="mstthmbrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:reaction-celebrate"} {...others} />);
}

export default Component;
