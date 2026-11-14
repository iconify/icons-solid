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

.ulx71lwvq {
  d: path("m3.5 8.5l8.5-4l8.5 4v9l-8.5 4l-8.5-4Zm8.5 2v11");
}

.xs4mdcbwe {
  d: path("m3.5 8.5l8.5 4l8.5-4");
}
</style><g class="ulnmmdpxh"><path class="ulx71lwvq"/><path class="xs4mdcbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:package"} {...others} />);
}

export default Component;
