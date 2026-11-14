import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dyiy7hbmg {
  d: path("M9 19.5v-5h4m3 1a3.5 3.5 0 1 0 4 0m-2-1.25v3.25");
}

.sou16vbyo {
  d: path("M11.772 19.5H2.5v-9L11 3l8.5 7.5v.928");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sou16vbyo"/><path class="dyiy7hbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:all-off"} {...others} />);
}

export default Component;
