import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.u15e9lyhy {
  d: path("m9.172 12.707l2.121 2.121l-3.182 1.061Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w6ahoqb3f {
  d: path("m15.536 6.343l2.121 2.121l-6.364 6.364l-2.121-2.121Z");
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="w6ahoqb3f"/><path class="u15e9lyhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:edit-square"} {...others} />);
}

export default Component;
