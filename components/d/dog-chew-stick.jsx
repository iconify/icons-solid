import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bk5vg8yrk {
  d: path("m7.757 14.121l6.364-6.364l2.122 2.122l-6.364 6.364Z");
}

.rpg_875rn {
  d: path("M3.697 17.303a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM14.303 6.697a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bk5vg8yrk"/><path class="rpg_875rn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dog-chew-stick"} {...others} />);
}

export default Component;
