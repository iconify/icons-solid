import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aoazcebzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 17.5h8.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 21h-8.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75M5.5 3L15 17.5m-12.5 1a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="aoazcebzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:polo-mallet"} {...others} />);
}

export default Component;
