import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z411-cboo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 21c0-3.5 2-6.5 5-6.5c1.806 0 3.249 1.087 4.112 2.716m.847 2.921q.04.425.041.863m.75-15.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m.75 6.25a8 8 0 0 1 2-.25c1.75 0 3 .5 3.5 1.5m-5.25 5l2 2L21 15.75");
}
</style><path class="z411-cboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:people-agree"} {...others} />);
}

export default Component;
