import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eyr9z5bdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5a9 9 0 0 1 11-11a9 9 0 0 1-11 11m13-15H21m-4.75 0l2 11m2-11l-2 11v8m-12.75-7l5-5m-4.75 2.75l2 2m.5-4.5l2 2m7-3.25h2");
}
</style><path class="eyr9z5bdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:amputee-football"} {...others} />);
}

export default Component;
