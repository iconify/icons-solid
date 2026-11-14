import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cwyag7hjm {
  d: path("M2.5 5.5h19v13h-19Zm15.5 0v13");
}

.i4y_-7upl {
  d: path("m7.5 9l2.5 1.5v3L7.5 15L5 13.5v-3Zm2.5 1.5L12.5 9l2.5 1.5v3L12.5 15L10 13.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cwyag7hjm"/><path class="i4y_-7upl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:histology"} {...others} />);
}

export default Component;
