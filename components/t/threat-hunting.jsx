import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rwt484b2r {
  d: path("M8.5 11.25a2 2.75 0 1 0 4 0a2 2.75 0 1 0-4 0Zm-.75-1.5l1 .75m4.5-.75l-1 .75m-4.5 3l1-.75m4.5.75l-1-.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydwudw6zd {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm12 5l5 5");
}
</style><g class="ulnmmdpxh"><path class="ydwudw6zd"/><path class="rwt484b2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:threat-hunting"} {...others} />);
}

export default Component;
