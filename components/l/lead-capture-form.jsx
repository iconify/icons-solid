import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.th616nbyz {
  d: path("M14.3 21.5H3.5v-19h15v11.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v22evte5s {
  d: path("M7 6h8v4H7Zm4.8 11H7v-4h5v3.8m2.75 1.2l2 2L21 15.75");
}
</style><g class="ulnmmdpxh"><path class="th616nbyz"/><path class="v22evte5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lead-capture-form"} {...others} />);
}

export default Component;
