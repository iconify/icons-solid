import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.btex5sb2a {
  d: path("M19 2V22");
}

.h3s_qfbzc {
  d: path("M5 12H19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyobk-bwz {
  d: path("M5 2V22");
}
</style><g class="hntgybcog"><path class="zyobk-bwz"/><path class="btex5sb2a"/><path class="h3s_qfbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-heading-linear"} {...others} />);
}

export default Component;
