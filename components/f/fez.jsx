import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f0l911b2f {
  d: path("M7.25 7.5h7q1.25 0 1.42 1.24l1.41 10.27q.17 1.24-1.08 1.24H5.5q-1.25 0-1.08-1.24L5.83 8.74Q6 7.5 7.25 7.5M4.75 17h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k7eugebie {
  d: path("M11.25 7.5c2-3.5 7-4 8.75-1V11m-.75 0h1.5l.5 3h-2.5Z");
}
</style><g class="hntgybcog"><path class="f0l911b2f"/><path class="k7eugebie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fez"} {...others} />);
}

export default Component;
