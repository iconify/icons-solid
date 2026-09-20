import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1srk3bzo {
  d: path("M9 9h6v4h-3.5L9 15.5Z");
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.hfygxfboj {
  fill: currentColor;
  d: path("M9 9h6v4h-3.5L9 15.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}
</style><g class="hntgybcog"><path class="hfygxfboj"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="a1srk3bzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:review-comment-duotone-thin"} {...others} />);
}

export default Component;
