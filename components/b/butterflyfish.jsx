import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ctd21sbka {
  d: path("M11.5 5q1.5 7 0 14m-3.25-7.5h.01");
}

.g3_tqjb5f {
  d: path("m3 12l3-2c1-6.5 10-7 11.5-.5L21 7v10l-3.5-2.5C16 21 7 20.5 6 14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g3_tqjb5f"/><path class="ctd21sbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:butterflyfish"} {...others} />);
}

export default Component;
