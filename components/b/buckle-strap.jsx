import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6rfa-bnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.125 5.5h.75A2.625 2.625 0 0 1 13.5 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-.75A2.625 2.625 0 0 1 7.5 15.875v-7.75A2.625 2.625 0 0 1 10.125 5.5M7.5 9.5h-5v5h5m6-5H19l2.5 2.5l-2.5 2.5h-5.5m-3-9v13");
}
</style><path class="t6rfa-bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:buckle-strap"} {...others} />);
}

export default Component;
