import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.onzv_j1-g {
  d: path("M6 9h12v12H6Zm3.5-5.5V9m5-5.5V9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9n__jb8e {
  d: path("m12.75 11.5l-2 3.5h2.5l-2 3.5");
}
</style><g class="ulnmmdpxh"><path class="onzv_j1-g"/><path class="v9n__jb8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:charger-fast"} {...others} />);
}

export default Component;
