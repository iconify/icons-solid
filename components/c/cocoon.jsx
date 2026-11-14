import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b50y6u5ra {
  d: path("M7 13.5a5 7.5 0 1 0 10 0a5 7.5 0 1 0-10 0m5-11V6");
}

.gn_79dbkv {
  d: path("M7.25 11q4.75 2.5 9.5 0m-9.5 5q4.75 2.5 9.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b50y6u5ra"/><path class="gn_79dbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cocoon"} {...others} />);
}

export default Component;
