import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m23w8qtbn {
  d: path("m7 21l-1-4c-3-2-3.5-6-1.5-7.5c1.5-1 3 0 3.5 1.5c0-5 2-8.5 6-8.5c4.5 0 7 4 7 9c0 4.5-2.5 7.5-5 9.5Z");
}

.sn4n68m9v {
  d: path("M11.5 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m23w8qtbn"/><path class="sn4n68m9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:catcher-mitt"} {...others} />);
}

export default Component;
