import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s7azl4b5p {
  d: path("M2.5 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm10 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 17h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9dpoab6g {
  d: path("m5.75 9.5l2.5-6h5.25l2.25 6m-7.5-6l2.5 6l2.75-6m2 18c0-4.75 1.5-6.5 6-6.5c0 4.75-1.5 6.5-6 6.5Zm0 0l3.25-3.25");
}
</style><g class="ulnmmdpxh"><path class="s7azl4b5p"/><path class="y9dpoab6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bike-lane-leaf"} {...others} />);
}

export default Component;
