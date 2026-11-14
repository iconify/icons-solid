import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rrfif82ny {
  d: path("M3.5 3h3v13h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xh6-oe9fo {
  d: path("m13 16l2.5-3.5l2 2l3-5.5");
}

.z3_mt7brr {
  d: path("M2.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8-15v17H21");
}
</style><g class="ulnmmdpxh"><path class="rrfif82ny"/><path class="z3_mt7brr"/><path class="xh6-oe9fo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lab-sensor"} {...others} />);
}

export default Component;
