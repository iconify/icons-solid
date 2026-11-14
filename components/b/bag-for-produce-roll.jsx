import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gclptsris {
  d: path("M3.5 4.75V17a3.5 1.75 0 0 0 7 0V4.75m0 3.75h10V21L18 19.75L15.5 21L13 19.75L10.5 21v-4");
}

.kytgkt5wk {
  d: path("M3.5 4.75a3.5 1.75 0 1 0 7 0a3.5 1.75 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kytgkt5wk"/><path class="gclptsris"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bag-for-produce-roll"} {...others} />);
}

export default Component;
