import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b1gttpbzo {
  d: path("M4.5 4.5V11A3.5 3.5 0 0 0 8 14.5h11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ko18k2bkg {
  d: path("m14.5 9.5l5 5l-5 5");
}
</style><g class="hntgybcog"><path class="b1gttpbzo"/><path class="ko18k2bkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:corner-down-right"} {...others} />);
}

export default Component;
