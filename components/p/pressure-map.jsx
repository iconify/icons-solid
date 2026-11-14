import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h17jhuqzw {
  d: path("m2.5 5l6-2l7 2l6-2v16l-6 2l-7-2l-6 2Z");
}

.tnf9357qh {
  d: path("M6 10c0-2.5 2.5-3 4.5-2c1.5.75 2.5-.5 4.5-.5c2.25 0 3.5 2 2.75 4.25S18 16.5 14.5 16.5c-3 0-4-1.5-6-1S6 13 6 10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w0jzyybxz {
  d: path("M10.5 11.75a2 1.75 0 1 0 4 0a2 1.75 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="h17jhuqzw"/><path class="tnf9357qh"/><path class="w0jzyybxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pressure-map"} {...others} />);
}

export default Component;
