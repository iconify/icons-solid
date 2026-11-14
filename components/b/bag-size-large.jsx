import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_ffzvwos {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7h15l1 8h-17Zm4 0V5.5a3.5 3.5 0 0 1 7 0V7M3 19.75h18m-16-2l-2 2l2 2m14-4l2 2l-2 2");
}
</style><path class="l_ffzvwos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bag-size-large"} {...others} />);
}

export default Component;
