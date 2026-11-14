import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ve4u52blu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.896 8h6.208a1.75 1.75 0 0 1 1.745 1.89l-.72 9a1.75 1.75 0 0 1-1.745 1.61H9.616a1.75 1.75 0 0 1-1.745-1.61l-.72-9A1.75 1.75 0 0 1 8.896 8M7.25 11h9.5M10 5.25c-.75-.75.75-1.75 0-2.75m4 2.75c-.75-.75.75-1.75 0-2.75");
}
</style><path class="ve4u52blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chai-glass"} {...others} />);
}

export default Component;
