import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sbo-yn2nd {
  d: path("M15.2 21.5H5v-19h14v9.7M8 6h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqlsylt0s {
  d: path("M15.2 12.5H8V9h8v3.2M8 16h4m6-1v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="sbo-yn2nd"/><path class="wqlsylt0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cash-deposit-slip"} {...others} />);
}

export default Component;
