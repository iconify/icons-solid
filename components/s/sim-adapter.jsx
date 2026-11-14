import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.shdwwuy4t {
  d: path("M7.5 11h5l3 3v4.5h-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsr5fgb5v {
  d: path("M4.5 2.5h10l5 5v14h-15Z");
}
</style><g class="ulnmmdpxh"><path class="wsr5fgb5v"/><path class="shdwwuy4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sim-adapter"} {...others} />);
}

export default Component;
