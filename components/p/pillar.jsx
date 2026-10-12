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

.kageuybtc {
  width: 13.5px;
  height: 3.25px;
  x: 5.25px;
  y: 18px;
  rx: 0.5px;
}

.li95xhbft {
  width: 6.5px;
  height: 12.25px;
  x: 8.75px;
  y: 5.75px;
  rx: 0.5px;
}

.ppsv6lbuy {
  d: path("M12 8.75V15");
}

.q69-afl3z {
  width: 18.5px;
  height: 3px;
  x: 2.75px;
  y: 2.75px;
  rx: 0.5px;
}
</style><g class="hntgybcog"><rect class="q69-afl3z"/><rect class="li95xhbft"/><path class="ppsv6lbuy"/><rect class="kageuybtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pillar"} {...others} />);
}

export default Component;
