import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qbtq1-1hd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.5 4.5l3.5.75V10c2.75.5 4.5 2.25 4.5 5v1.5h-8Zm1.5 12V19m3-2.5V19m2.5-2.5V19m-10-14.5L7 5.25V10c-2.75.5-4.5 2.25-4.5 5v1.5h8ZM9 16.5V19m-3-2.5V19m-2.5-2.5V19");
}
</style><path class="qbtq1-1hd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:soccer-boots-pair"} {...others} />);
}

export default Component;
