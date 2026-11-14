import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l4m_fubpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 19.25c-3.5 0-6-2.25-6-5.5c0-3.5 3-5.25 4-9C13.25 6 14 7.5 14 9.5c1.25-.75 2.25-1.75 2.25-3c2.5 1.75 3.75 4.25 3.75 7.25c0 3.25-2.5 5.5-6 5.5M2.5 12H5m-1.5 4h1.75M4.5 8h1.25");
}
</style><path class="l4m_fubpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flame-streak"} {...others} />);
}

export default Component;
