import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lt7670buj {
  d: path("M4 12h5.5v9.5H4Zm10.5 0H20v9.5h-5.5ZM4 17.75l5.5-2.5m5 2.5l5.5-2.5M6.5 9a5.5 5.5 0 0 1 11 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqvooebbw {
  d: path("M15.25 6.75L17.5 9l2.25-2.25");
}
</style><g class="ulnmmdpxh"><path class="lt7670buj"/><path class="wqvooebbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rx-generic"} {...others} />);
}

export default Component;
