import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgt_sbhw {
  d: path("m13.5 7l1-1l1 1");
}

.egvo42tjv {
  d: path("M7.5 4.75a1.75 1.75 0 0 1 3.5 0V12h7.75a1.75 1.75 0 0 1 0 3.5H15.5v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V16l-4-4a1.6 1.6 0 0 1 2.25-2.25L7.5 11.5Z");
}

.tobjl_bdz {
  d: path("M17 3.5A2.5 2.5 0 1 1 14.5 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="egvo42tjv"/><path class="tobjl_bdz"/><path class="dbgt_sbhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:right-hand-rule"} {...others} />);
}

export default Component;
