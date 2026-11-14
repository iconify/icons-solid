import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lyqk4dcxz {
  d: path("m9.75 7l1.5 1.5l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8rfatb5h {
  d: path("M3 11h18v10.5H3Zm4 0V3.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V11");
}
</style><g class="ulnmmdpxh"><path class="w8rfatb5h"/><path class="lyqk4dcxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:award-voting"} {...others} />);
}

export default Component;
