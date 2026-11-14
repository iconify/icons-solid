import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e77bgybai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 4.5l4 4m0-4l-4 4m7.5-2h9.5m-17 4l4 4m0-4l-4 4m7.5-2h9.5m-17 4l4 4m0-4l-4 4m7.5-2h9.5");
}
</style><path class="e77bgybai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blocklist"} {...others} />);
}

export default Component;
