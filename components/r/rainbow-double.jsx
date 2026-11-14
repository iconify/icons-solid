import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.glc9pkbtm {
  d: path("M6.25 16.5a5.75 5.75 0 0 1 11.5 0m-15.25 0h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpnq25_jo {
  d: path("M2.5 16.5a9.5 9.5 0 0 1 19 0");
}
</style><g class="hntgybcog"><path class="xpnq25_jo"/><path class="glc9pkbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rainbow-double"} {...others} />);
}

export default Component;
