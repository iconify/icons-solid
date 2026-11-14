import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ng2nk68jm {
  d: path("M18.5 2.5h3v3h-3Z");
}

.q8irwoedh {
  d: path("M18.5 4H10a8.5 8.5 0 0 1 0 17a7 7 0 0 1 0-14a5.5 5.5 0 0 1 0 11a4 4 0 0 1 0-8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q8irwoedh"/><path class="ng2nk68jm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hose-coiled"} {...others} />);
}

export default Component;
