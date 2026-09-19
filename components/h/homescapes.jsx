import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3pmu0w-p {
  cx: 39.625px;
  cy: 8.92px;
  r: 2.875px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k4qyefyhm {
  cx: 8.375px;
  cy: 39.08px;
  r: 2.875px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lzb9mh8tx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.25 39.08h25.5");
}

.txa1wybgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.75 8.92h-25.5");
}

.vjkaz5b6y {
  cx: 8.375px;
  cy: 18.973px;
  r: 2.875px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wuoty2bix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.75 29.027h-25.5");
}

.xpubp99eq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.25 18.973h25.5");
}

.yqfbmc8ul {
  cx: 39.625px;
  cy: 29.027px;
  r: 2.875px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="j3pmu0w-p"/><path class="txa1wybgb"/><circle class="vjkaz5b6y"/><path class="xpubp99eq"/><circle class="k4qyefyhm"/><path class="lzb9mh8tx"/><circle class="yqfbmc8ul"/><path class="wuoty2bix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:homescapes"} {...others} />);
}

export default Component;
