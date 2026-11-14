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

.k9pwl7bcv {
  d: path("m13.061 9.561l1.378 1.378a1.5 1.5 0 0 1 0 2.122l-1.378 1.378a1.5 1.5 0 0 1-2.122 0l-1.378-1.378a1.5 1.5 0 0 1 0-2.122l1.378-1.378a1.5 1.5 0 0 1 2.122 0");
}

.ktc-bccqk {
  d: path("m13.061 3.561l7.378 7.378a1.5 1.5 0 0 1 0 2.122l-7.378 7.378a1.5 1.5 0 0 1-2.122 0l-7.378-7.378a1.5 1.5 0 0 1 0-2.122l7.378-7.378a1.5 1.5 0 0 1 2.122 0");
}
</style><g class="hntgybcog"><path class="ktc-bccqk"/><path class="k9pwl7bcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:component-variant"} {...others} />);
}

export default Component;
