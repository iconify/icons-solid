import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f47e_mbtf {
  d: path("M3.5 16.5v-12a2 2 0 0 1 2-2h10");
}

.t2zcrdbyn {
  d: path("M8 6.5h13.5v15H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqdtbhbrm {
  d: path("M13 11.5L10.75 14L13 16.5m3.5-5l2.25 2.5l-2.25 2.5");
}
</style><g class="ulnmmdpxh"><path class="f47e_mbtf"/><path class="t2zcrdbyn"/><path class="xqdtbhbrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:code-duplication"} {...others} />);
}

export default Component;
