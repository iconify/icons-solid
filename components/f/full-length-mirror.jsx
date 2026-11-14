import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nw4jt61eb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10a5.5 7.5 0 1 0 11 0a5.5 7.5 0 1 0-11 0M9 16.5l-2 5m8-5l2 5M9.5 8l2-2m-2 5L13 7.5");
}
</style><path class="nw4jt61eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:full-length-mirror"} {...others} />);
}

export default Component;
