import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mfo0vvp8a {
  d: path("M14.25 16.5q1.25-1.25 2.5 0t2.5 0t2.5 0m-7.5 3.5q1.25-1.25 2.5 0t2.5 0t2.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uz3wdrbcd {
  d: path("M10.917 19.363L8.5 18.5l-6 2.5V5.5l6-2.5l7 2.5l6-2.5v10.067M8.5 3v15.5m7-13v7.4");
}
</style><g class="ulnmmdpxh"><path class="uz3wdrbcd"/><path class="mfo0vvp8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flood-zone"} {...others} />);
}

export default Component;
