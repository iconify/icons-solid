import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.av7wgzbuf {
  fill: currentColor;
  d: path("m2.5 13l6-1v7l-6 2Zm13-8l6-2v8l-6-1Z");
}

.is5mhezez {
  d: path("m2.5 5l6-2l7 2l6-2v16l-6 2l-7-2l-6 2Zm6-2v16m7-14v16m-7-8.5l7-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="is5mhezez"/><path class="av7wgzbuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-choropleth"} {...others} />);
}

export default Component;
