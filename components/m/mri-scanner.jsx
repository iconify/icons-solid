import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2vbuccni {
  cx: 12px;
  cy: 10.5px;
  r: 3.5px;
}

.dfcfuobnq {
  width: 18.5px;
  height: 15px;
  x: 2.75px;
  y: 3px;
  rx: 3px;
}

.hdj66lbws {
  d: path("M6 21.25h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="dfcfuobnq"/><circle class="c2vbuccni"/><path class="hdj66lbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mri-scanner"} {...others} />);
}

export default Component;
