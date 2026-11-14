import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p68ujbcck {
  d: path("M10 14.5c0-1 .75-1.5 2-1.5s2 .5 2 1.5s-2 1-2 2.25m0 2h.01M10.5 2.5h3v6h-3Z");
}

.sd83miq0f {
  d: path("M16.3 7H21v14.5H3V7h4.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sd83miq0f"/><path class="p68ujbcck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ask-me-badge"} {...others} />);
}

export default Component;
