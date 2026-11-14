import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhpegdbbf {
  d: path("M14.5 3.5q0 6.5 6.5 6.5");
}

.lv_du8bun {
  d: path("M3 3.5h11.5L21 10v9q-2.25 3-4.5 0q-2.25 3-4.5 0q-2.25 3-4.5 0q-2.25 3-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lv_du8bun"/><path class="fhpegdbbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fleece-fabric"} {...others} />);
}

export default Component;
