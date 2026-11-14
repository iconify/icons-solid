import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kuv7mwbcm {
  d: path("M15.5 10.5h3a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2H17m-6.5-6L16 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xs0dy5rzx {
  d: path("M5.5 5.5L8 8c0 2-3 4-3 7.5v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4C17 12 14 10 14 8V5.5Z");
}
</style><g class="ulnmmdpxh"><path class="xs0dy5rzx"/><path class="kuv7mwbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cocktail-pitcher"} {...others} />);
}

export default Component;
