import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahh0fdblj {
  d: path("M8 11.75h1.75a1.5 1.5 0 0 1 3 0h1.75v1.75a1.5 1.5 0 0 1 0 3v1.75H8Z");
}

.e58790f_e {
  d: path("M2.5 3h19v18h-19Zm0 4h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e58790f_e"/><path class="ahh0fdblj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:browser-extension-dev"} {...others} />);
}

export default Component;
