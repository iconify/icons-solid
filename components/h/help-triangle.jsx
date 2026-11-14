import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m7latrbdk {
  d: path("m12 3l9.5 16.75h-19Z");
}

.r2-eo_i_z {
  d: path("M10.5 11.75c0-.85.7-1.5 1.5-1.5s1.5.65 1.5 1.5c0 1.15-1.5 1.35-1.5 2.5M12 17h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m7latrbdk"/><path class="r2-eo_i_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:help-triangle"} {...others} />);
}

export default Component;
