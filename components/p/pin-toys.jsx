import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdr_yic2y {
  d: path("M7 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nstprgbih {
  d: path("m3 7l4-4h14v14l-4 4m0-14l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0fgq8blw {
  d: path("M3 7h14v14H3Z");
}
</style><g class="ulnmmdpxh"><path class="y0fgq8blw"/><path class="nstprgbih"/><path class="cdr_yic2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-toys"} {...others} />);
}

export default Component;
