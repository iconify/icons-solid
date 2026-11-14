import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nfo0c4boq {
  fill: currentColor;
  d: path("M2.5 14H7v6H2.5Zm7.25-5h4.5v11h-4.5Z");
}

.pnimyfb6u {
  d: path("M17 4h4.5v16H17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nfo0c4boq"/><path class="pnimyfb6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:priority-medium"} {...others} />);
}

export default Component;
