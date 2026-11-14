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

.rxl1og6su {
  d: path("M7 17.5h14.5V15H11m-5.5-2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.wx3n87b6e {
  d: path("M2.5 13a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="wx3n87b6e"/><path class="rxl1og6su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:carpet-floor"} {...others} />);
}

export default Component;
