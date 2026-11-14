import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bc71-obpt {
  d: path("M4 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm10.25-3.25h2m-2 6.5h2m1.5-3.25a1 2.75 0 1 0 2 0a1 2.75 0 1 0-2 0Zm-.5 0h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxgmp391r {
  d: path("M2 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm14 0a2.75 8.5 0 1 0 5.5 0a2.75 8.5 0 1 0-5.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="xxgmp391r"/><path class="bc71-obpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:vault-open"} {...others} />);
}

export default Component;
