import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cid3i0bxr {
  d: path("m15.995 16.884l3.889-3.889l2.121 2.121l-3.889 3.889Z");
}

.ir1fu7k4o {
  d: path("M16 7V4h2v4.75m-5.005 11.134l3.889-3.889l2.121 2.121l-3.889 3.889Z");
}

.q9c73nx4c {
  d: path("M9.66 20.5H4v-10l8-7l7.127 6.236");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q9c73nx4c"/><path class="ir1fu7k4o"/><path class="cid3i0bxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mortgage-lien"} {...others} />);
}

export default Component;
