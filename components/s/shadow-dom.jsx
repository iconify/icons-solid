import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4wbcmbvh {
  d: path("M7.5 6.75L5.25 9l2.25 2.25m3-4.5L12.75 9l-2.25 2.25m8-2.75h.5a2 2 0 0 1 2 2v.5m0 3v1.5m0 3v.5a2 2 0 0 1-2 2h-.5m-3 0H14m-3 0h-.5a2 2 0 0 1-2-2v-.5");
}

.gwlgtkb9v {
  d: path("M2.5 2.5h13v13h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gwlgtkb9v"/><path class="b4wbcmbvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:shadow-dom"} {...others} />);
}

export default Component;
