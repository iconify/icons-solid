import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ru3tnrb6h {
  d: path("M13 21.5v-3h3");
}

.scurqoxdv {
  d: path("M2.5 6.5h19V15h-19Zm5.5 0v-4h8v4M8 15v6.5h5l3-3V15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="scurqoxdv"/><path class="ru3tnrb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:folding-machine"} {...others} />);
}

export default Component;
