import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zgojvjblh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.111 8.957l4.596-4.596a1.75 1.75 0 0 1 2.475 0l.707.707a1.75 1.75 0 0 1 0 2.475l-4.596 4.596a1.75 1.75 0 0 1-2.475 0l-.707-.707a1.75 1.75 0 0 1 0-2.475m5.389.793l7.5 7.5m-14.75.25h7.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 12.75 21h-7.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="zgojvjblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gavel-block"} {...others} />);
}

export default Component;
