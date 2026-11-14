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

.jks-j8nup {
  d: path("M20 12a8 8 0 1 1-2.25-5.75");
}

.zpb_sxbkz {
  d: path("M17.75 2.5v3.75H14");
}
</style><g class="hntgybcog"><path class="jks-j8nup"/><path class="zpb_sxbkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:test-retry"} {...others} />);
}

export default Component;
