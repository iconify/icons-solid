import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hnhza0siy {
  d: path("M11.5 13.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjeu7c3si {
  d: path("M2.5 5q9.5-3 19 0M12 3.5v4m-9 0h18V19H3Z");
}
</style><g class="ulnmmdpxh"><path class="vjeu7c3si"/><path class="hnhza0siy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dash-camera"} {...others} />);
}

export default Component;
