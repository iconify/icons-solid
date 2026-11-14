import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3ydq3xpg {
  d: path("M2.5 5h8v11h-8Zm11 3h8v11h-8Z");
}

.t63tbub5x {
  d: path("M2.5 13.5L6 10l4.5 4m3 2.5L17 13l4.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f3ydq3xpg"/><path class="t63tbub5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:stereo-pair"} {...others} />);
}

export default Component;
