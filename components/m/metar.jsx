import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b8evbbbwm {
  d: path("M15.25 21.5A2.25 2.25 0 0 1 15 17a2.75 2.75 0 0 1 5 .75a1.9 1.9 0 0 1 0 3.75Z");
}

.hdpealb0k {
  d: path("M10.6 21.5H4.5v-19h15v10.8M8 7h8m-8 4h8m-8 4h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hdpealb0k"/><path class="b8evbbbwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:metar"} {...others} />);
}

export default Component;
