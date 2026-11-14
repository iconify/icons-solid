import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.q9_6qwodb {
  d: path("M14 10h5v11h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6h3a1xrk {
  fill: currentColor;
  d: path("M6 3h5v18H6Z");
}
</style><g class="ulnmmdpxh"><path class="bos0j4biy"/><path class="v6h3a1xrk"/><path class="q9_6qwodb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:assets-column"} {...others} />);
}

export default Component;
