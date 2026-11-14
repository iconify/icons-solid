import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cn-n_sbil {
  d: path("M5 11a7 7 0 0 1 14 0");
}

.gh1wydxtv {
  d: path("M2.5 15.25a2.5 4.25 0 1 0 5 0a2.5 4.25 0 1 0-5 0Zm14 0a2.5 4.25 0 1 0 5 0a2.5 4.25 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-5jk5fge {
  d: path("M5 19.5q7 3.5 14 0");
}
</style><g class="ulnmmdpxh"><path class="cn-n_sbil"/><path class="gh1wydxtv"/><path class="v-5jk5fge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wrestling-headgear"} {...others} />);
}

export default Component;
