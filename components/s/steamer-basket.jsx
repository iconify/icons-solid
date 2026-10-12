import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8stv6j_u {
  d: path("M4.25 7.5a7.75 3.25 0 0 1 15.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_aksfuwe {
  width: 18.5px;
  height: 10.75px;
  x: 2.75px;
  y: 10.5px;
  rx: 2.5px;
}

.pkxnteb1g {
  d: path("M2.75 15.75h18.5");
}
</style><g class="hntgybcog"><path class="g8stv6j_u"/><rect class="l_aksfuwe"/><path class="pkxnteb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:steamer-basket"} {...others} />);
}

export default Component;
