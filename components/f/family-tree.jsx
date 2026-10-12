import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rd52c4g0k {
  cx: 18.5px;
  cy: 10.75px;
  r: 2.25px;
}

.v4m_bcc1n {
  cx: 5.5px;
  cy: 10.75px;
  r: 2.25px;
}

.vyahqzb6p {
  cx: 12px;
  cy: 6.5px;
  r: 2.5px;
}

.ymp3_lbre {
  d: path("M12 21.25V9m0 7.75l-5.25-4m5.25 4l5.25-4m-9 8.5h7.5");
}
</style><g class="hntgybcog"><circle class="vyahqzb6p"/><circle class="v4m_bcc1n"/><circle class="rd52c4g0k"/><path class="ymp3_lbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:family-tree"} {...others} />);
}

export default Component;
