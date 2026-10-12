import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jjd86ybbk {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.15 10.5h.01");
}

.n9vfqwkmb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.75h2.5q1.5 0 1.85 1.46l3.8 15.58q.35 1.46-1.15 1.46H6.25q-1.5 0-1.15-1.46L8.9 4.21q.35-1.46 1.85-1.46m-3.5 14.5h9.5m-4.75 0l1.5-8.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="n9vfqwkmb"/><path class="jjd86ybbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:metronome"} {...others} />);
}

export default Component;
