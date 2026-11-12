import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_ilzosws {
  d: path("M6 13H13");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lghfbwbad {
  d: path("M4 8H13");
}

.lqfqjbb0r {
  d: path("M8 18H13");
}

.ppqxdzqbu {
  stroke-linejoin: round;
  d: path("M17 20V4L20 8");
}
</style><g class="ipq1z-bjh"><path class="lghfbwbad"/><path class="f_ilzosws"/><path class="lqfqjbb0r"/><path class="ppqxdzqbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-from-bottom-to-top-broken"} {...others} />);
}

export default Component;
