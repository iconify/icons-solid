import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zkwwlrbxb {
  d: path("M8 17v-4.5l5 4.5Z");
}

.zlresw1uy {
  d: path("M4 20.5v-16l16 16Z");
}
</style><g class="ulnmmdpxh"><path class="zlresw1uy"/><path class="zkwwlrbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:set-square"} {...others} />);
}

export default Component;
