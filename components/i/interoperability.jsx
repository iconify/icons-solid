import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qpo6ebc6v {
  d: path("M10.5 8.5h8v4a2.25 2.25 0 1 1 0 4v4h-8v-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.un5cyo64d {
  d: path("M2.5 3.5h8v5a2.25 2.25 0 1 1 0 4v3h-8Z");
}
</style><g class="ulnmmdpxh"><path class="un5cyo64d"/><path class="qpo6ebc6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:interoperability"} {...others} />);
}

export default Component;
