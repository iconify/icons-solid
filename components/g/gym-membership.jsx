import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jehmku8jc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6za2 2 0 0 1 2 2v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m14 0za2 2 0 0 1 2 2v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2M7 12h10");
}
</style><path class="jehmku8jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gym-membership"} {...others} />);
}

export default Component;
