import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.flusukc3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.464 11.646l3.182-3.182a2.75 2.75 0 0 1 3.89 0a2.75 2.75 0 0 1 0 3.89l-3.182 3.182a2.75 2.75 0 0 1-3.89 0a2.75 2.75 0 0 1 0-3.89m3.006-3.005l3.889 3.889m-6.718-1.06l3.889 3.889M4 12a8 8 0 0 1 8-8m-1.75-1.75L12 4l-1.75 1.75M20 12a8 8 0 0 1-8 8m1.75-1.75L12 20l1.75 1.75");
}
</style><path class="flusukc3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:spin-out"} {...others} />);
}

export default Component;
