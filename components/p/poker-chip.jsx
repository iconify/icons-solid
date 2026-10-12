import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuu2xjbdm {
  d: path("m17.72 15.3l1.73 1M12 18.6v2m-5.72-5.3l-1.73 1m1.73-7.6l-1.73-1M12 5.4v-2m5.72 5.3l1.73-1");
}

.zufhtjckp {
  cx: 12px;
  cy: 12px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="yuu2xjbdm"/><circle class="zufhtjckp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:poker-chip"} {...others} />);
}

export default Component;
