import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3i5xbc4s {
  d: path("M2.5 21.5v-3C2.5 15 6 13 9.75 12.75L12 15.5l2.25-2.75C18 13 21.5 15 21.5 18.5v3Zm6-15a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.tw225qzdr {
  d: path("m12 15.5l1 1.75l-1 4.25l-1-4.25Zm5.25 3.5c-1.25-.75-1.5-1.25-1.5-1.75q0-.75.75-.75c.25 0 .5.25.75.5c.25-.25.5-.5.75-.5q.75 0 .75.75c0 .5-.25 1-1.5 1.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b3i5xbc4s"/><path class="tw225qzdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hr-manager"} {...others} />);
}

export default Component;
