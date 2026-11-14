import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k3_2462er {
  d: path("m3.75 8l6.5 3.75v7.75l-6.5-3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7vbj5bhv {
  d: path("M13.5 2.5L20 6.25V14l-6.5 3.75V10L7 6.25Zm0 7.5L20 6.25");
}
</style><g class="ulnmmdpxh"><path class="y7vbj5bhv"/><path class="k3_2462er"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cube-slice"} {...others} />);
}

export default Component;
