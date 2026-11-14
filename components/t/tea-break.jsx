import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mlj_upb_s {
  d: path("M5.5 10H16v3a5 5 0 0 1-5 5h-.5a5 5 0 0 1-5-5Z");
}

.s_7ta9brz {
  d: path("M16 11h1.25a2.25 2.25 0 0 1 0 4.5h-2M3.5 21h16M9 7.25C7.75 6 10.25 4.5 9 2.75m4 4.5C11.75 6 14.25 4.5 13 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mlj_upb_s"/><path class="s_7ta9brz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tea-break"} {...others} />);
}

export default Component;
