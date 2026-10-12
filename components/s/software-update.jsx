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

.jx1n1lb5n {
  d: path("M10.75 20.25h-5.5a2.5 2.5 0 0 1-2.5-2.5V6.25a2.5 2.5 0 0 1 2.5-2.5h13.5a2.5 2.5 0 0 1 2.5 2.5v5.5m-18.5-3.5h18.5m-15 3.5h4.5");
}

.kmuea923i {
  d: path("M17.5 14.75a2.75 2.75 0 1 1-2.75 2.75m-1.25 1.25l1.25-1.25L16 18.75");
}
</style><g class="hntgybcog"><path class="jx1n1lb5n"/><path class="kmuea923i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:software-update"} {...others} />);
}

export default Component;
