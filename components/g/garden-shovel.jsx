import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u5muqhmpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 7.5L14 5q3-2.5 6.5-1.5Q21.5 7 19 10l-2.5 2.5ZM8 16l6-6m-8.625 6.875l-.322.107a1.5 1.5 0 0 0-.587 2.484l.068.068a1.5 1.5 0 0 0 2.484-.587l.107-.322a1.383 1.383 0 0 0-1.75-1.75");
}
</style><path class="u5muqhmpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:garden-shovel"} {...others} />);
}

export default Component;
