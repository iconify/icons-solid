import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avvysqc5b {
  d: path("M8.5 6.5H12v11H8.5Zm3.5 3h7.5a1.5 1.5 0 0 1 0 3H12");
}

.j5k7_ik1y {
  d: path("M3 2.5h12.5v19H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j5k7_ik1y"/><path class="avvysqc5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:door-handle-lever"} {...others} />);
}

export default Component;
