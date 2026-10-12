import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0yewh3tu {
  cx: 4px;
  cy: 20px;
  r: 1.25px;
}

.g_r9k1kci {
  cx: 6.75px;
  cy: 15.75px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p75jvb5ex {
  d: path("M15 5q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}

.rm929_bat {
  width: 12.5px;
  height: 10.5px;
  x: 8.75px;
  y: 2.75px;
  rx: 5.25px;
}
</style><g class="hntgybcog"><rect class="rm929_bat"/><circle class="g_r9k1kci"/><circle class="c0yewh3tu"/><path class="p75jvb5ex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chain-of-thought"} {...others} />);
}

export default Component;
