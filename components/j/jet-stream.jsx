import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gey0goydo {
  d: path("M2.5 18.5q7.5-6 15-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yt4ihub-r {
  d: path("M5.25 9.5q8.25-7 16.25-1");
}

.yyjzt3bvb {
  d: path("M2.5 14q8.5-7 17-1");
}
</style><g class="ulnmmdpxh"><path class="yt4ihub-r"/><path class="yyjzt3bvb"/><path class="gey0goydo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:jet-stream"} {...others} />);
}

export default Component;
