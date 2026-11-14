import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qqrw054oq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-3 13.5c0-4 3-6.5 6.5-6.5s6.5 2.5 6.5 6.5M14.25 5a6 6 0 0 1 0 6m2.5-8.5a9.5 9.5 0 0 1 0 11");
}
</style><path class="qqrw054oq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:opera-singer"} {...others} />);
}

export default Component;
