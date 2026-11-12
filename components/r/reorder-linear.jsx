import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-fd45bwd {
  d: path("M19 18L5 18");
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

.ncsx83b9b {
  d: path("M19 10L5 10");
}
</style><g class="ipq1z-bjh"><path class="ncsx83b9b"/><path class="hhlxfkbol"/><path class="hxd6ts2yz"/><path class="b-fd45bwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-linear"} {...others} />);
}

export default Component;
