import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-c5l68al {
  d: path("M10.25 11.75V10.5a1.75 1.75 0 0 1 3.5 0v1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_rnd6boi {
  d: path("M9.25 16v-1C7 13.75 5.5 11.75 5.5 9.25a6.5 6.5 0 0 1 13 0c0 2.5-1.5 4.5-3.75 5.75v1Zm0 2.75h5.5M10.5 21.5h3");
}
</style><g class="ulnmmdpxh"><path class="x_rnd6boi"/><path class="b-c5l68al"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:light-bulb-edison"} {...others} />);
}

export default Component;
