import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ij2s6ab7f {
  d: path("m17.909 4.513l2.681 2.25l-7.071 8.426l-3.269 1.173l.588-3.423Z");
}

.myo8qbblp {
  d: path("M17 15.4v6.1H3v-17h11.3m-7.8-2v4m3.5-4v4m3.5-4v2.9M6 10.5h3.2M6 14h1.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="myo8qbblp"/><path class="ij2s6ab7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:clinical-note"} {...others} />);
}

export default Component;
