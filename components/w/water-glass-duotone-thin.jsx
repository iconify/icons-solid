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

.l-y9a1u9j {
  fill: currentColor;
  d: path("M7 4h10v13l-3 3h-4l-3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s09hy0b0y {
  d: path("M7 11h10");
}

.ulhyoxsyo {
  d: path("M7 4h10v13l-3 3h-4l-3 -3Z");
}
</style><g class="hntgybcog"><path class="l-y9a1u9j"/><path class="ulhyoxsyo"/><path class="s09hy0b0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:water-glass-duotone-thin"} {...others} />);
}

export default Component;
