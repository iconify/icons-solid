import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6nb7ob2z {
  d: path("M9 3q8 9 0 18M9 3v18m-6-9h13.5");
}

.s1ffzhgum {
  d: path("m21.5 12l-3.75-3.5A2 2 0 0 0 16.5 12a2 2 0 0 0 1.25 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f6nb7ob2z"/><path class="s1ffzhgum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cupid-bow"} {...others} />);
}

export default Component;
