import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.emx5mackx {
  d: path("M3 11.5q9 3 18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.spjyovp4g {
  d: path("M3 7q9 3 18 0v9q-9 3-18 0Z");
}
</style><g class="hntgybcog"><path class="spjyovp4g"/><path class="emx5mackx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tennis-wristband"} {...others} />);
}

export default Component;
