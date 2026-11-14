import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bonwwjblq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8h18.5q-2 6.5-8 6.5H5Zm13-5L8.25 17M6 19a1.25 2.25 0 1 0 2.5 0A1.25 2.25 0 1 0 6 19");
}
</style><path class="bonwwjblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dory"} {...others} />);
}

export default Component;
