import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0a7sccky {
  d: path("M14.5 15h5v3.5A2.5 2.5 0 0 1 17 21a2.5 2.5 0 0 1-2.5-2.5Zm5 1h.75a1.5 1.5 0 0 1 0 3h-.75");
}

.z5nb6qbkq {
  d: path("M11.9 20H2.5V3h15v9.2M10 3v17M7 9v3m6-3v3");
}
</style><g class="ulnmmdpxh"><path class="z5nb6qbkq"/><path class="y0a7sccky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:galley"} {...others} />);
}

export default Component;
