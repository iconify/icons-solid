import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.etrfzibrz {
  d: path("M8 13.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm0-7h.01m2.99 0h5");
}

.izf0xb2-s {
  d: path("M4.5 3h15v18h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="izf0xb2-s"/><path class="etrfzibrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:washing-machine"} {...others} />);
}

export default Component;
