import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fcev_7bcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 8.5h3a5.25 5.25 0 0 1 5.25 5.25v1.5a5.25 5.25 0 0 1-5.25 5.25h-3A5.25 5.25 0 0 1 3 15.25v-1.5A5.25 5.25 0 0 1 8.25 8.5m1.5 0V4.75M7.25 14h.01m4.99 0h.01m6.49-12q0 3.25 3.25 3.25q-3.25 0-3.25 3.25q0-3.25-3.25-3.25q3.25 0 3.25-3.25");
}
</style><path class="fcev_7bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chatbot-sparkle"} {...others} />);
}

export default Component;
