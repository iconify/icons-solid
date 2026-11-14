import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oeev4kbnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 21C8 16 10 12.5 14 11.5v-8l2.75 3h1l2.75-3V10c0 1.75-1 2.75-2.25 3.25L19 21Zm0 0h-2c-2.5 0-3-4-.5-5m11.5-6.75h.01");
}
</style><path class="oeev4kbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cat-breed-sphynx"} {...others} />);
}

export default Component;
