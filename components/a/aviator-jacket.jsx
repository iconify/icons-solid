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

.jc6m9x9ck {
  d: path("m8 3.5l1.5 5L12 7l2.5 1.5l1.5-5M12 7v13.5M6 17h12");
}

.n0k0vbclv {
  d: path("M8 3.5L3.5 6l-1 12H6v2.5h12V18h3.5l-1-12L16 3.5Z");
}
</style><g class="hntgybcog"><path class="n0k0vbclv"/><path class="jc6m9x9ck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:aviator-jacket"} {...others} />);
}

export default Component;
