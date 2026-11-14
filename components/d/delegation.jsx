import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e21gprspo {
  d: path("M9 17.25L10.75 19L9 20.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wejr7eb8p {
  d: path("M4 2.5h4L10.5 5v6A1.5 1.5 0 0 1 9 12.5H4A1.5 1.5 0 0 1 2.5 11V4A1.5 1.5 0 0 1 4 2.5Zm11 9h3.5l3 3V20a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-7a1.5 1.5 0 0 1 1.5-1.5Zm-8.5 4c0 2.5 1.5 3.5 4 3.5");
}
</style><g class="ulnmmdpxh"><path class="wejr7eb8p"/><path class="e21gprspo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:delegation"} {...others} />);
}

export default Component;
