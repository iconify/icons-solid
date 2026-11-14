import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qaxgs-v7v {
  d: path("M6.5 12c1 2 3 2.75 5.5 2.75S16.5 14 17.5 12");
}

.rqmkh2bii {
  d: path("M3 9c0 6 4 9 9 9s9-3 9-9a2.25 2.25 0 0 0-4.5 0A2.25 2.25 0 0 0 12 9a2.25 2.25 0 0 0-4.5 0A2.25 2.25 0 0 0 3 9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rqmkh2bii"/><path class="qaxgs-v7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mouthguard"} {...others} />);
}

export default Component;
