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

.i5kxk2lww {
  width: 11.5px;
  height: 9px;
  x: 6.25px;
  y: 12.25px;
  rx: 2px;
}

.ooforrb2b {
  d: path("m5.75 2.75l6.25 8.5l6.25-8.5");
}

.rzwey0j4u {
  d: path("M10.5 15.25h3m-4.25 3h5.5");
}
</style><g class="hntgybcog"><path class="ooforrb2b"/><rect class="i5kxk2lww"/><path class="rzwey0j4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lanyard"} {...others} />);
}

export default Component;
