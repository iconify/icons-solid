import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c248pkb0v {
  fill: currentColor;
  d: path("M11 11.5a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H19v3l-3.25-3H13a2 2 0 0 1-2-2Z");
}

.f4_8j1rjn {
  d: path("M16.5 6.75V4.5a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2V12a2 2 0 0 0 2 2H5v3l3.25-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f4_8j1rjn"/><path class="c248pkb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bilingual-kids"} {...others} />);
}

export default Component;
