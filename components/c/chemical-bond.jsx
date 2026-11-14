import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0rkrsv1g {
  fill: currentColor;
  d: path("M2.75 15.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m11-7a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzt_w3bcs {
  d: path("m9.75 13.5l4.5-3");
}
</style><g class="hntgybcog"><path class="b0rkrsv1g"/><path class="hzt_w3bcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chemical-bond"} {...others} />);
}

export default Component;
