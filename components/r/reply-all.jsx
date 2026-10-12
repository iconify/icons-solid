import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ayd36ibye {
  d: path("M8.5 10.5h5.75a6 6 0 0 1 6 6v2");
}

.fdmk6kshg {
  d: path("M8 6.25L3.75 10.5L8 14.75m4.75-8.5L8.5 10.5l4.25 4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fdmk6kshg"/><path class="ayd36ibye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:reply-all"} {...others} />);
}

export default Component;
