import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.njvzl5cqf {
  d: path("M13.5 7.25L12 8.75l1.5 1.5");
}

.u7nj80b6z {
  d: path("M12 8.75a3.75 3.75 0 1 1-3.75 3.75");
}

.wx95c7tlb {
  d: path("M7.75 4.5h8.5a5.25 5.25 0 0 1 5.25 5.25v4.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-4.5A5.25 5.25 0 0 1 7.75 4.5");
}
</style><g class="hntgybcog"><path class="wx95c7tlb"/><path class="u7nj80b6z"/><path class="njvzl5cqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:live-replay"} {...others} />);
}

export default Component;
