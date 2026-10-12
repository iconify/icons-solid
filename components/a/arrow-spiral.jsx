import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cmyms_bhp {
  d: path("M14 10.75L17.25 14l3.25-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lt5cnnoly {
  d: path("M9.25 12.5a2 2 0 0 1 4 0a4 4 0 0 1-8 0a6 6 0 0 1 12 0V14");
}
</style><g class="hntgybcog"><path class="lt5cnnoly"/><path class="cmyms_bhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-spiral"} {...others} />);
}

export default Component;
