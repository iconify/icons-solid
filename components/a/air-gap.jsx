import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oe7fsp-9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 8h.75A2.625 2.625 0 0 1 8.5 10.625v2.75A2.625 2.625 0 0 1 5.875 16h-.75A2.625 2.625 0 0 1 2.5 13.375v-2.75A2.625 2.625 0 0 1 5.125 8m13 0h.75a2.625 2.625 0 0 1 2.625 2.625v2.75A2.625 2.625 0 0 1 18.875 16h-.75a2.625 2.625 0 0 1-2.625-2.625v-2.75A2.625 2.625 0 0 1 18.125 8M8.5 12H10m4 0h1.5");
}
</style><path class="oe7fsp-9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:air-gap"} {...others} />);
}

export default Component;
