import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eiuiunmxj {
  d: path("m4 7.25l8 4l8-4m-8 4v9M7.75 4.75L16 9.25m-1.25 8.5l1.75 1.75l3.5-3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i0344qbfk {
  d: path("M20.25 11V7.65a1.5 1.5 0 0 0-.8-1.3l-6.55-3.4a2 2 0 0 0-1.8 0l-6.55 3.4a1.5 1.5 0 0 0-.8 1.3v8.7a1.5 1.5 0 0 0 .8 1.3l6.55 3.4");
}
</style><g class="hntgybcog"><path class="i0344qbfk"/><path class="eiuiunmxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:package-check"} {...others} />);
}

export default Component;
