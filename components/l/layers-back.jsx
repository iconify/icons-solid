import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dye9di2wx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.375 4.005l2.998 1.729a1.75 1.75 0 0 1 0 3.032l-2.998 1.729a1.75 1.75 0 0 1-1.75 0L5.627 8.766a1.75 1.75 0 0 1 0-3.032l2.998-1.729a1.75 1.75 0 0 1 1.75 0M3 11.25L9.5 15l6.5-3.75M3 15l6.5 3.75L16 15m3.5-11v15.75m-2-2l2 2l2-2");
}
</style><path class="dye9di2wx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:layers-back"} {...others} />);
}

export default Component;
