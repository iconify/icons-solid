import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jgtwt8jrc {
  d: path("m8.375 11.659l9.576-8.034L20.2 6.306l-9.575 8.035Zm3.447-2.892l2.25 2.681m.814-5.252l2.25 2.681");
}

.nkis0bbjq {
  d: path("M5.5 11h4v10.5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nkis0bbjq"/><path class="jgtwt8jrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crossing-barrier"} {...others} />);
}

export default Component;
