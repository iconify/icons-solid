import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_xpl5b9t {
  d: path("M20 7L4 7");
}

.t6qtu5t7v {
  d: path("M20 12L4 12");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ywnhkcb3j {
  d: path("M20 17L4 17");
}
</style><g class="ipq1z-bjh"><path class="q_xpl5b9t"/><path class="t6qtu5t7v"/><path class="ywnhkcb3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hamburger-menu-line-duotone"} {...others} />);
}

export default Component;
