import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vq21b4r8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 18.5v-14a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v14Zm0 0l-1.75 3h13l-1.75-3M10.25 6v9m3.5-9v9");
}
</style><path class="vq21b4r8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tower-fan"} {...others} />);
}

export default Component;
