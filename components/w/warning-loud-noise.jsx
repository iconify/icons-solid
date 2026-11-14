import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w975f9_zi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5H6L11 4v13.5L6 13H2.5Zm12-.75a4.5 4.5 0 0 1 0 6M17 5.5q.292.335.545.701q.252.366.463.757q.211.392.377.804t.285.841t.191.867q.071.439.093.883t-.005.887q-.028.444-.104.882M18 14.75v3.5M18 21h.01");
}
</style><path class="w975f9_zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:warning-loud-noise"} {...others} />);
}

export default Component;
