import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bz29n2njm {
  d: path("M11.1 17H2.5V3h19v14h-.6M6.5 7.5h11m-11 4H12");
}

.o856kbbwk {
  d: path("M13.5 15a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-caf7m7i {
  d: path("M14.75 17.25V21L16 20l1.25 1v-3.75");
}
</style><g class="ulnmmdpxh"><path class="bz29n2njm"/><path class="o856kbbwk"/><path class="x-caf7m7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:certificate-print"} {...others} />);
}

export default Component;
