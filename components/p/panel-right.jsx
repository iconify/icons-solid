import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m2_9-pz2k {
  d: path("M2.5 3.5h19v17h-19Zm12.5 0v17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zub4acc2g {
  d: path("m7.5 9l3 3l-3 3");
}
</style><g class="ulnmmdpxh"><path class="m2_9-pz2k"/><path class="zub4acc2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:panel-right"} {...others} />);
}

export default Component;
