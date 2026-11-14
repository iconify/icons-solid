import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cj3xrvjwb {
  d: path("M3 9c4.5 0 4.5-6 9-6s4.5 6 9 6M3 13h6m3 0h9M3 17h3m3 0h8M3 21h10m3 0h5");
}

.hrmjxqbnv {
  d: path("M3 3c4.5 0 4.5 6 9 6s4.5-6 9-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hrmjxqbnv"/><path class="cj3xrvjwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:genome-sequence"} {...others} />);
}

export default Component;
