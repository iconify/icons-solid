import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l1mpn4bvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 4.25a4 4 0 0 1 4.5 0m1.75 3a4 4 0 0 1-2.25 4m-3.5 0a4 4 0 0 1-2.25-4m-3 14.25q0-3 1.5-4.5m2.5-1.75c1.75-.75 4.25-.75 6 0m3.534 3.372q.466 1.206.466 2.878M17 16a2.25 2.25 0 1 1 2.25 2.25V19m0 2.75h.01");
}
</style><path class="l1mpn4bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:missing-person"} {...others} />);
}

export default Component;
