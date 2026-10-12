import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b303drbzs {
  d: path("M3.25 5v4.5h17.5V5M12 9.5v2.25");
}

.f9auxb1ek {
  width: 3px;
  height: 4px;
  x: 10.5px;
  y: 11.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q1cg06-mt {
  width: 11.5px;
  height: 4.5px;
  x: 6.25px;
  y: 2.75px;
  rx: 2.25px;
}

.rz6a1acmx {
  width: 6px;
  height: 3px;
  x: 9px;
  y: 18.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="q1cg06-mt"/><path class="b303drbzs"/><rect class="f9auxb1ek"/><rect class="rz6a1acmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jade-roller"} {...others} />);
}

export default Component;
