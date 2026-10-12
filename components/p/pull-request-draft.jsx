import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fk_szrbck {
  cx: 17.25px;
  cy: 18.75px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0ydh5bsj {
  cx: 6.75px;
  cy: 5.25px;
  r: 2.25px;
}

.mtl-gzbxy {
  cx: 6.75px;
  cy: 18.75px;
  r: 2.25px;
}

.yvwq_5b0m {
  d: path("M6.75 7.5v9m10.5-12.75v1m0 3.75V10m0 3.5v1");
}
</style><g class="hntgybcog"><circle class="m0ydh5bsj"/><circle class="mtl-gzbxy"/><circle class="fk_szrbck"/><path class="yvwq_5b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pull-request-draft"} {...others} />);
}

export default Component;
