import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j7f-ibc-d {
  d: path("M10.25 10a1.75 4.5 0 1 0 3.5 0a1.75 4.5 0 1 0-3.5 0Zm-.75 7.5h5");
}

.ttqqk-efe {
  d: path("M7.5 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xl_rddc0k {
  d: path("M6 2.5h11A2.5 2.5 0 0 1 19.5 5v14a2.5 2.5 0 0 1-2.5 2.5H6A1.5 1.5 0 0 1 4.5 20V4A1.5 1.5 0 0 1 6 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="xl_rddc0k"/><path class="ttqqk-efe"/><path class="j7f-ibc-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:passport-card"} {...others} />);
}

export default Component;
