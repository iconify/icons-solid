import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aewuuhb3v {
  cx: 18.5px;
  cy: 6.25px;
  r: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qg0ecjuof {
  cx: 12px;
  cy: 18px;
  r: 2.5px;
}

.vha_j0t2o {
  cx: 5.5px;
  cy: 6.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="vha_j0t2o"/><circle class="aewuuhb3v"/><circle class="qg0ecjuof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:because"} {...others} />);
}

export default Component;
