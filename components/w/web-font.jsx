import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t13eeubsk {
  d: path("M2.5 3h19v18h-19Zm0 4.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ys4iecc7d {
  d: path("m5.25 18.25l3.5-7.75l3.5 7.75M6.5 15.5H11m3.25.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4.5-2.25v4.5");
}
</style><g class="ulnmmdpxh"><path class="t13eeubsk"/><path class="ys4iecc7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:web-font"} {...others} />);
}

export default Component;
