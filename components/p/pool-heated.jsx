import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.be2gyeb1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5q2.25-1.5 4.75 0Q9.5 17 12 15.5q2.25-1.5 4.75 0q2.25 1.5 4.75 0M2.5 20q2.25-1.5 4.75 0Q9.5 21.5 12 20q2.25-1.5 4.75 0q2.25 1.5 4.75 0M8 11C7 9.75 9 8.25 8 7c-.5-.75-.25-1.5 0-2m4 6c-1-1.25 1-2.75 0-4c-.5-.75-.25-1.5 0-2m4 6c-1-1.25 1-2.75 0-4c-.5-.75-.25-1.5 0-2");
}
</style><path class="be2gyeb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pool-heated"} {...others} />);
}

export default Component;
