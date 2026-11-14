import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eneh5abtm {
  d: path("M13 3v5h5m-7.5 13h-5c-.83 0-1.5-.67-1.5-1.5v-15M14.75 22l.5-2.5L20 14.75l2 2l-4.75 4.75Z");
}

.lyf1cr_6c {
  d: path("M4 4.5C4 3.67 4.67 3 5.5 3H13l5 5v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lyf1cr_6c"/><path class="eneh5abtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rename-symbol"} {...others} />);
}

export default Component;
