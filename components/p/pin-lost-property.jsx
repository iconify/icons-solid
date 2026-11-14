import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gq7tyut-x {
  d: path("M10 13.5a2 2 0 1 1 2 2v.5m0 2.25h.01");
}

.lu5th6b2m {
  d: path("M2.5 3.5h19v4h-19Zm1.5 4h16v14H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lu5th6b2m"/><path class="gq7tyut-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-lost-property"} {...others} />);
}

export default Component;
