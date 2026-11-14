import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkwzcqb9a {
  d: path("M3 21V9l9-6l9 6v12Z");
}

.d-i7hzbjk {
  d: path("m13.25 12.25l1.5.75l.75-1.5Zm1.5 2.75a3 3 0 0 1-5.5 0");
}

.m3johub1v {
  d: path("M9.25 13a3 3 0 0 1 5.5 0");
}

.oyv3cxbac {
  d: path("M10.75 15.75L9.25 15l-.75 1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bkwzcqb9a"/><path class="m3johub1v"/><path class="d-i7hzbjk"/><path class="oyv3cxbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:reuse-centre"} {...others} />);
}

export default Component;
