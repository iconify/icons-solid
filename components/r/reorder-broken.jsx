import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hfpr3cbbr {
  d: path("M7 10H5M19 10L11 10");
}

.hhlxfkbol {
  d: path("M19 14L5 14");
}

.hxd6ts2yz {
  d: path("M19 6L5 6");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oiy9mib8b {
  d: path("M17 18H19M5 18H13");
}
</style><g class="ipq1z-bjh"><path class="hfpr3cbbr"/><path class="oiy9mib8b"/><path class="hhlxfkbol"/><path class="hxd6ts2yz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-broken"} {...others} />);
}

export default Component;
