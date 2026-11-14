import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g5vumqbqx {
  d: path("M15.5 6.5H20V11M2.5 6.5H6m-3.5 4h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2qaygb1r {
  d: path("m4 17.5l6-8l3 4l7-7");
}
</style><g class="ulnmmdpxh"><path class="v2qaygb1r"/><path class="g5vumqbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:agility"} {...others} />);
}

export default Component;
