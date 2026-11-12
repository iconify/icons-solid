import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.etr2ul1zr {
  d: path("M12 2C7.28595 2 4.92893 2 3.46446 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46446C19.0711 2 16.714 2 12 2Z");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t1j-_8esg {
  d: path("M22 14.5L2 14.5");
}

.tcg0b8fzd {
  d: path("M9 2.02008L9 14.4999");
}
</style><g class="ipq1z-bjh"><path class="etr2ul1zr"/><path class="t1j-_8esg"/><path class="tcg0b8fzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-left-linear"} {...others} />);
}

export default Component;
