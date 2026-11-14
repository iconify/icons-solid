import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y2vx9rbyc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9h1.078a1.75 1.75 0 0 0 1.171-.449L9 6.75a1.498 1.498 0 0 1 2.5 1.113v8.274A1.498 1.498 0 0 1 9 17.25l-2.001-1.801A1.75 1.75 0 0 0 5.828 15H4.75A1.75 1.75 0 0 1 3 13.25v-2.5A1.75 1.75 0 0 1 4.75 9M15 9l6 6m0-6l-6 6");
}
</style><path class="y2vx9rbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:volume-x"} {...others} />);
}

export default Component;
