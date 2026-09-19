import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.avxqhobsp {
  cx: 27.142px;
  cy: 16.887px;
  r: 2.581px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hzpqnlmob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4");
}

.k2wg1dafr {
  cx: 18.503px;
  cy: 16.887px;
  r: 2.581px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tdejo1l7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 22.725c0 7.162-5.806 12.968-12.969 12.968A12.96 12.96 0 0 1 12 29.547");
}
</style><path class="hzpqnlmob"/><path class="tdejo1l7v"/><circle class="avxqhobsp"/><circle class="k2wg1dafr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:parklink"} {...others} />);
}

export default Component;
