import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h82hcmbpo {
  stroke-linejoin: round;
  d: path("M17 4V20L20 16");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-8nhbbnb {
  d: path("M6 11H13");
}

.u9u89mb-h {
  d: path("M4 16L13 16");
}

.yoy8e1bnl {
  d: path("M8 6L13 6");
}
</style><g class="ipq1z-bjh"><path class="u9u89mb-h"/><path class="n-8nhbbnb"/><path class="yoy8e1bnl"/><path class="h82hcmbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-from-top-to-bottom-broken"} {...others} />);
}

export default Component;
