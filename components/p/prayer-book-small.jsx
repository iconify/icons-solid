import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t-z697m3r {
  d: path("M5 15.5V5a2.5 2.5 0 0 1 2.5-2.5H19V18H7.5A2.5 2.5 0 0 1 5 15.5Z");
}

.totmgg2vb {
  d: path("M5 15.5A2.5 2.5 0 0 1 7.5 13H19m-6 5v3.5l1.5-1.25L16 21.5V18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t-z697m3r"/><path class="totmgg2vb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:prayer-book-small"} {...others} />);
}

export default Component;
