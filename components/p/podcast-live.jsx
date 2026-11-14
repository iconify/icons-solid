import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eg635ud8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5za3 3 0 0 1 3 3v4a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3m0 10v9m-3.5 0h7M17.25 3a7 7 0 0 1 0 9M6.75 3a7 7 0 0 0 0 9M20.5 2.5a10 10 0 0 1 0 10m-17-10a10 10 0 0 0 0 10");
}
</style><path class="eg635ud8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:podcast-live"} {...others} />);
}

export default Component;
