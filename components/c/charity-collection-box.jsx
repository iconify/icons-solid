import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eqzck8b_v {
  d: path("M5 6a7 3 0 1 0 14 0A7 3 0 1 0 5 6Zm5 0h4m-2 11.5l-3-3c-1-1-.75-3 1-3c1 0 1.75.75 2 1.5c.25-.75 1-1.5 2-1.5c1.75 0 2 2 1 3Z");
}

.t9061cbsp {
  d: path("M5 6v12.5a7 3 0 0 0 14 0V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t9061cbsp"/><path class="eqzck8b_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:charity-collection-box"} {...others} />);
}

export default Component;
