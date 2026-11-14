import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.to3ktcv4h {
  d: path("M6 8.5h1.5a3.5 3.5 0 0 1 0 7H6m6.5-3.5h9M14 12l6-8m-6 8l6 8M17 4h3v3m-.75 2.75L21.5 12l-2.25 2.25M17 20h3v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w19d4-cem {
  d: path("M2.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="w19d4-cem"/><path class="to3ktcv4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cost-allocation"} {...others} />);
}

export default Component;
