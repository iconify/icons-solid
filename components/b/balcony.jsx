import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpfpsdeap {
  d: path("M7 18V8a5 5 0 0 1 10 0v10Zm-4.25-5.5h18.5M4 12.5V18m6-5.5V18m4-5.5V18m6-5.5V18");
}

.d04zi7bfg {
  width: 18.5px;
  height: 3.25px;
  x: 2.75px;
  y: 18px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bpfpsdeap"/><rect class="d04zi7bfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:balcony"} {...others} />);
}

export default Component;
