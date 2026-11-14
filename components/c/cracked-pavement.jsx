import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f04uoqbvy {
  d: path("m17.5 6l-1.75 4l2 3l-2.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywk-lxbmn {
  d: path("M6 6h15.5L18 18H2.5Zm7.75 0l-3.5 12");
}
</style><g class="ulnmmdpxh"><path class="ywk-lxbmn"/><path class="f04uoqbvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cracked-pavement"} {...others} />);
}

export default Component;
