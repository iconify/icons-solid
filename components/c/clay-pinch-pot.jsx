import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hatt_ok2l {
  d: path("M3 17.5c.5-8 4.5-11 9-11s8.5 3 9 11Z");
}

.iub03wb0y {
  d: path("M8.5 12a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hatt_ok2l"/><path class="iub03wb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:clay-pinch-pot"} {...others} />);
}

export default Component;
