import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gaa4-zmgb {
  d: path("M2.5 6.5h19v9h-19Zm3 9V18m13-2.5V18");
}

.k6n_hdb4q {
  fill: currentColor;
  d: path("M6.5 11h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xddmfbgnf {
  d: path("M10 11h8");
}
</style><g class="ulnmmdpxh"><path class="gaa4-zmgb"/><path class="k6n_hdb4q"/><path class="xddmfbgnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:set-top-box"} {...others} />);
}

export default Component;
