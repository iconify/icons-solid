import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gor9o5bgp {
  d: path("M10 13.75v1.75L8.5 18m1.5-2.5l1.5 2.5m3.5-4.5h.01M15 15.75v.5L14 18m1-1.75L16 18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvtf2m2ph {
  d: path("m12 3l9.5 17.5h-19Zm-2 8h.01");
}
</style><g class="ulnmmdpxh"><path class="uvtf2m2ph"/><path class="gor9o5bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crosswalk-kids"} {...others} />);
}

export default Component;
