import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sb4k1ybeb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14a4 4 0 1 0 8 0a4 4 0 1 0-8 0m15-4a4 4 0 0 1 0 8a4 4 0 0 1 0-8l-2-3l1-1.5h2l1 1.5Z");
}
</style><path class="sb4k1ybeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:divorce"} {...others} />);
}

export default Component;
