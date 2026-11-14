import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ujnm16bwc {
  d: path("m15.5 10.25l1.5-1.5l1.5 1.5m-3 3.5l1.5 1.5l1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7ibfe3_f {
  d: path("M2.5 6h19v12h-19ZM6 12h5");
}
</style><g class="ulnmmdpxh"><path class="w7ibfe3_f"/><path class="ujnm16bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:input-number"} {...others} />);
}

export default Component;
