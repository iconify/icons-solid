import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5iitkb8t {
  d: path("M7 5.5a1.25 1.25 0 1 1 1.25 1.25v.75m0 2h.01m3.24-3H16m-7.75 7h.01m3.24 0H16m-7.75 4h.01m3.24 0h3");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="x5iitkb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:faq-list"} {...others} />);
}

export default Component;
