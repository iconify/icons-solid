import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aatz2tb9q {
  width: 7px;
  height: 6.5px;
  x: 8.5px;
  y: 9px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j1-unv-pk {
  cx: 12px;
  cy: 19.5px;
  r: 1.75px;
}

.odcry9b4p {
  d: path("M12 6.25V9");
}

.sjnr11qhx {
  d: path("M8.5 12.25h7M12 15.5v2.25");
}

.t88z8mbby {
  cx: 12px;
  cy: 4.5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="t88z8mbby"/><path class="odcry9b4p"/><rect class="aatz2tb9q"/><path class="sjnr11qhx"/><circle class="j1-unv-pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shock-absorber"} {...others} />);
}

export default Component;
