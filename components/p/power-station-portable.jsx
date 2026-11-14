import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lbzd6j1td {
  d: path("M6 14.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7.5-1.75H17M13.5 16H17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y45k1_94o {
  d: path("M3 8h18v12.5H3Zm5 0V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V8");
}
</style><g class="ulnmmdpxh"><path class="y45k1_94o"/><path class="lbzd6j1td"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:power-station-portable"} {...others} />);
}

export default Component;
