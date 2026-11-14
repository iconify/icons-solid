import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k93b51btb {
  d: path("M3 21V6h18v15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytvwm3h5f {
  d: path("M7 10h10v11H7Zm0 3.5h10M7 17h10");
}
</style><g class="ulnmmdpxh"><path class="k93b51btb"/><path class="ytvwm3h5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dock-door"} {...others} />);
}

export default Component;
