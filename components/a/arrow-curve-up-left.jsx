import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uhir2-m7c {
  d: path("M16 21v-7c0-2-.75-3.75-2-5L8 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.usxb4tbdz {
  d: path("M13 3H8v5");
}
</style><g class="ulnmmdpxh"><path class="uhir2-m7c"/><path class="usxb4tbdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:arrow-curve-up-left"} {...others} />);
}

export default Component;
